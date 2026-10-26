import {
  LEAD_ERROR_AFTER,
  LEAD_ERROR_BEFORE,
  LEAD_REQUEST_TIMEOUT_MS,
  LEAD_STILL_SENDING_MS,
  LEAD_SUCCESS_MESSAGE,
  LEAD_UNCERTAIN_AFTER,
  LEAD_UNCERTAIN_BEFORE,
  buildLeadPayload,
  isHttpsLeadEndpoint,
  leadDeliveryUncertain,
  leadResponseAccepted,
  pageUrlFromLocation,
  type LeadInput,
} from '../lib/lead-form';

const SENDING_LABEL = 'Sending…';
const STILL_SENDING_LABEL = 'Still sending…';

function fieldValue(form: HTMLFormElement, name: string): string {
  const control = form.elements.namedItem(name);
  if (control instanceof RadioNodeList) return String(control.value || '');
  if (
    control instanceof HTMLInputElement ||
    control instanceof HTMLTextAreaElement ||
    control instanceof HTMLSelectElement
  ) {
    return control.value;
  }
  return '';
}

function smsConsent(form: HTMLFormElement): LeadInput['smsConsent'] {
  const control = form.elements.namedItem('sms_consent');
  if (control instanceof HTMLInputElement && control.type === 'checkbox') {
    return control.checked ? 'yes' : 'no';
  }
  return null;
}

function honeypotFilled(form: HTMLFormElement): boolean {
  return fieldValue(form, '_honey').trim() !== '';
}

function phoneHref(value: string): string {
  return value.startsWith('tel:+') ? value : 'tel:+16052504838';
}

function phoneMessage(before: string, after: string, phoneDisplay: string, href: string): DocumentFragment {
  const fragment = document.createDocumentFragment();
  const link = document.createElement('a');
  link.href = phoneHref(href);
  link.textContent = phoneDisplay || '(605) 250-4838';
  link.className = 'text-link';
  fragment.append(before, link, after);
  return fragment;
}

function errorMessage(phoneDisplay: string, href: string): DocumentFragment {
  return phoneMessage(LEAD_ERROR_BEFORE, LEAD_ERROR_AFTER, phoneDisplay, href);
}

function uncertainMessage(phoneDisplay: string, href: string): DocumentFragment {
  return phoneMessage(LEAD_UNCERTAIN_BEFORE, LEAD_UNCERTAIN_AFTER, phoneDisplay, href);
}

async function readLeadBody(response: Response): Promise<unknown> {
  const text = await response.text();
  const trimmed = text.replace(/^\uFEFF/, '').trim();
  if (!trimmed) return undefined;
  try {
    return JSON.parse(trimmed) as unknown;
  } catch {
    return undefined;
  }
}

function showStatus(status: HTMLElement, kind: 'success' | 'error', content: Node): void {
  status.replaceChildren(content);
  status.dataset.state = kind;
  status.setAttribute('role', kind === 'error' ? 'alert' : 'status');
  status.hidden = false;
  status.focus();
}

export async function sendLead(form: HTMLFormElement): Promise<void> {
  if (form.dataset.sending === 'true') return;
  if (!form.reportValidity()) return;

  const status = form.querySelector<HTMLElement>('[data-form-status]');
  const button = form.querySelector<HTMLButtonElement>('button[type="submit"]');
  if (!status || !button) return;

  const successText = form.dataset.successMessage || LEAD_SUCCESS_MESSAGE;

  if (honeypotFilled(form)) {
    form.reset();
    showStatus(status, 'success', document.createTextNode(successText));
    return;
  }

  form.dataset.sending = 'true';

  const endpoint = form.dataset.endpoint || '';
  const phoneDisplay = form.dataset.phoneDisplay || '(605) 250-4838';
  const href = form.dataset.phoneHref || 'tel:+16052504838';
  if (!button.dataset.label) button.dataset.label = (button.textContent || 'Send').trim();
  const label = button.dataset.label;

  button.disabled = true;
  button.textContent = SENDING_LABEL;
  form.setAttribute('aria-busy', 'true');
  status.hidden = true;
  status.replaceChildren();
  delete status.dataset.state;

  const restore = (clearFields: boolean) => {
    form.removeAttribute('aria-busy');
    delete form.dataset.sending;
    button.disabled = false;
    button.textContent = label;
    if (clearFields) form.reset();
  };

  if (!isHttpsLeadEndpoint(endpoint)) {
    showStatus(status, 'error', errorMessage(phoneDisplay, href));
    restore(false);
    return;
  }

  const payload = buildLeadPayload({
    name: fieldValue(form, 'name'),
    phone: fieldValue(form, 'phone'),
    email: fieldValue(form, 'email'),
    service: fieldValue(form, 'service'),
    message: fieldValue(form, 'message'),
    page: pageUrlFromLocation(window.location),
    submittedAt: new Date(),
    town: fieldValue(form, 'town'),
    company: fieldValue(form, 'company'),
    project: fieldValue(form, 'project'),
    urgency: fieldValue(form, 'urgency'),
    smsConsent: smsConsent(form),
  });

  // FormSubmit often replies only after it sends the mail. A short abort
  // (previously 12s, and 20s before that) showed a failure while the email
  // still arrived. Wait a full minute, then treat a timeout or a dropped
  // connection as "on its way" instead of a hard failure.
  const controller = new AbortController();
  const stillSendingTimer = setTimeout(() => {
    if (form.dataset.sending === 'true') button.textContent = STILL_SENDING_LABEL;
  }, LEAD_STILL_SENDING_MS);
  const abortTimer = setTimeout(() => controller.abort(), LEAD_REQUEST_TIMEOUT_MS);
  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams(payload),
      credentials: 'omit',
      cache: 'no-store',
      signal: controller.signal,
    });
    const data = await readLeadBody(response);
    if (!leadResponseAccepted(response.status, data)) {
      showStatus(status, 'error', errorMessage(phoneDisplay, href));
      restore(false);
      return;
    }
    showStatus(status, 'success', document.createTextNode(successText));
    restore(true);
  } catch (error) {
    if (leadDeliveryUncertain(error)) {
      showStatus(status, 'success', uncertainMessage(phoneDisplay, href));
      restore(true);
      return;
    }
    showStatus(status, 'error', errorMessage(phoneDisplay, href));
    restore(false);
  } finally {
    clearTimeout(stillSendingTimer);
    clearTimeout(abortTimer);
  }
}

export function bindLeadForms(root: ParentNode = document): void {
  root.querySelectorAll<HTMLFormElement>('form[data-request-form]').forEach((form) => {
    if (form.dataset.leadBound === 'true') return;
    form.dataset.leadBound = 'true';
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      void sendLead(form);
    });
  });
}

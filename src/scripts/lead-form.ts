import {
  LEAD_ERROR_AFTER,
  LEAD_ERROR_BEFORE,
  LEAD_SUCCESS_MESSAGE,
  buildLeadPayload,
  isHttpsLeadEndpoint,
  pageUrlFromLocation,
  type LeadInput,
} from '../lib/lead-form';

const SENDING_LABEL = 'Sending…';

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

function errorMessage(phoneDisplay: string, href: string): DocumentFragment {
  const fragment = document.createDocumentFragment();
  const link = document.createElement('a');
  link.href = phoneHref(href);
  link.textContent = phoneDisplay || '(605) 250-4838';
  link.className = 'text-link';
  fragment.append(LEAD_ERROR_BEFORE, link, LEAD_ERROR_AFTER);
  return fragment;
}

function showStatus(status: HTMLElement, kind: 'success' | 'error', content: Node): void {
  status.replaceChildren(content);
  status.dataset.state = kind;
  status.setAttribute('role', kind === 'error' ? 'alert' : 'status');
  status.hidden = false;
  status.focus();
}

function submissionAccepted(data: unknown): boolean {
  if (!data || typeof data !== 'object') return false;
  const success = (data as { success?: unknown }).success;
  return success === true || success === 'true';
}

async function sendLead(form: HTMLFormElement): Promise<void> {
  if (form.dataset.sending === 'true') return;
  if (!form.reportValidity()) return;

  const status = form.querySelector<HTMLElement>('[data-form-status]');
  const button = form.querySelector<HTMLButtonElement>('button[type="submit"]');
  if (!status || !button) return;

  if (honeypotFilled(form)) {
    form.reset();
    showStatus(status, 'success', document.createTextNode(LEAD_SUCCESS_MESSAGE));
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
    smsConsent: smsConsent(form),
  });

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
      signal: AbortSignal.timeout(20000),
    });
    const data: unknown = await response.json();
    if (!response.ok || !submissionAccepted(data)) throw new Error('Lead was not accepted');
    showStatus(status, 'success', document.createTextNode(LEAD_SUCCESS_MESSAGE));
    restore(true);
  } catch {
    showStatus(status, 'error', errorMessage(phoneDisplay, href));
    restore(false);
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

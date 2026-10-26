/**
 * Lead mail sent by FormSubmit (https://formsubmit.co).
 * No API key. The shop address is already public.
 * FormSubmit does not support a custom From name on this endpoint.
 */

export const LEAD_SUCCESS_MESSAGE =
  'Thanks, we got your request. A local electrician will call you shortly.';

export const LEAD_ERROR_BEFORE = "We couldn't send that. Call ";
export const LEAD_ERROR_AFTER = " and we'll take it from here.";

/**
 * Shown when the POST was sent but the browser never got a clear answer.
 * FormSubmit can still deliver the email after a slow or dropped response.
 */
export const LEAD_UNCERTAIN_BEFORE =
  "Thanks, your request is on its way. If you don't hear from us in a few minutes, call ";
export const LEAD_UNCERTAIN_AFTER = '.';

/** How long to wait for FormSubmit before treating the in-flight POST as uncertain. */
export const LEAD_REQUEST_TIMEOUT_MS = 60_000;

/** Button label change while a slow FormSubmit response is still in flight. */
export const LEAD_STILL_SENDING_MS = 8_000;

/** Used when the visitor does not choose a service. Plain words, not a sales subject. */
export const GENERAL_SERVICE = 'General request';

const SUBJECT_PREFIX = 'New lead: ';

export function leadErrorText(phoneDisplay: string): string {
  return `${LEAD_ERROR_BEFORE}${phoneDisplay}${LEAD_ERROR_AFTER}`;
}

/** America/Chicago wall time, e.g. "Oct 26, 2026, 1:45 PM CDT". */
export function formatChicagoTime(date: Date): string {
  const formatted = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/Chicago',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    timeZoneName: 'short',
  }).format(date);
  return formatted.replace(/[\u202f\u00a0]/g, ' ');
}

export function staticPagePath(pathname: string): string {
  const path = pathname.replace(/\/index\.html$/, '/').replace(/\.html$/, '');
  return path || '/';
}

export function pageUrlFromLocation(location: { origin: string; pathname: string }): string {
  const path = location.pathname || '/';
  if (!/^https?:\/\//.test(location.origin)) return path;
  return `${location.origin}${path}`;
}

export function isHttpsLeadEndpoint(value: string): boolean {
  try {
    const url = new URL(value);
    return url.protocol === 'https:' && url.hostname === 'formsubmit.co';
  } catch {
    return false;
  }
}

function oneLine(value: string, max: number): string {
  return value.replace(/[\u0000-\u001F\u007F]+/g, ' ').replace(/\s+/g, ' ').trim().slice(0, max);
}

/** Safe to put in a Reply-To header. */
export function isReplyEmail(value: string): boolean {
  const email = value.trim();
  if (email.length < 3 || email.length > 254) return false;
  if (/[\s,;<>"'\\]/.test(email)) return false;
  return /^[^@]+@[^@]+\.[^@]+$/.test(email);
}

function displayEmail(value: string): string {
  const email = value.replace(/[\u0000-\u001F\u007F]/g, '').trim().slice(0, 254);
  return email || 'Not provided';
}

/** Pull `success` out of a FormSubmit body, including a JSON string wrapper. */
export function leadSuccessValue(data: unknown): unknown {
  if (typeof data === 'string') {
    const trimmed = data.replace(/^\uFEFF/, '').trim();
    if (!trimmed) return undefined;
    try {
      return leadSuccessValue(JSON.parse(trimmed));
    } catch {
      return undefined;
    }
  }
  if (!data || typeof data !== 'object') return undefined;
  return (data as { success?: unknown }).success;
}

/**
 * Any HTTP 2xx is accepted unless FormSubmit said success=false.
 * `true` and `"true"` are accepted. 4xx and 5xx are rejected.
 */
export function leadResponseAccepted(status: number, data: unknown): boolean {
  if (status >= 400 && status <= 599) return false;
  const success = leadSuccessValue(data);
  const flag = typeof success === 'string' ? success.trim() : success;
  if (flag === false || flag === 'false') return false;
  if (status >= 200 && status < 300) return true;
  return flag === true || flag === 'true';
}

/** Timeout or a network failure after fetch() was called. The POST may already be on its way. */
export function leadDeliveryUncertain(error: unknown): boolean {
  if (!error || typeof error !== 'object') return false;
  const name = 'name' in error ? String((error as { name: unknown }).name) : '';
  if (name === 'AbortError' || name === 'TimeoutError') return true;
  return error instanceof TypeError;
}

export interface LeadInput {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
  page: string;
  submittedAt: Date;
  town?: string;
  company?: string;
  /** House or business, when the form asks. */
  project?: string;
  /** How soon the visitor needs help, when the form asks. */
  urgency?: string;
  /** Present only when the form actually has the checkbox. */
  smsConsent?: 'yes' | 'no' | null;
}

export function leadSubject(service: string, name: string): string {
  const serviceLabel = oneLine(service, 80) || GENERAL_SERVICE;
  const nameLabel = oneLine(name, 80) || 'website visitor';
  return `${SUBJECT_PREFIX}${serviceLabel} - ${nameLabel}`;
}

/**
 * Flat text fields only. No images, no shortened links, no autoresponder.
 * `_replyto` is set only when the visitor typed an email.
 */
export function buildLeadPayload(input: LeadInput): Record<string, string> {
  const name = oneLine(input.name, 200);
  const service = oneLine(input.service, 120);
  const message = input.message.replace(/\u0000/g, '').trim().slice(0, 5000);
  const email = input.email.trim();
  const payload: Record<string, string> = {
    Name: name || 'Not provided',
    Phone: oneLine(input.phone, 40) || 'Not provided',
    Email: displayEmail(email),
    'Service requested': service || GENERAL_SERVICE,
    Message: message || 'Not provided',
    Page: oneLine(input.page, 500) || 'Not provided',
    Submitted: formatChicagoTime(input.submittedAt),
    _subject: leadSubject(service, name),
    _template: 'basic',
    _captcha: 'false',
    _honey: '',
  };
  const town = input.town ? oneLine(input.town, 80) : '';
  const company = input.company ? oneLine(input.company, 120) : '';
  const project = input.project ? oneLine(input.project, 40) : '';
  const urgency = input.urgency ? oneLine(input.urgency, 40) : '';
  if (town) payload.Town = town;
  if (company) payload.Company = company;
  if (project) payload.Project = project;
  if (urgency) payload.Urgency = urgency;
  if (input.smsConsent === 'yes' || input.smsConsent === 'no') {
    payload['SMS consent'] = input.smsConsent;
  }
  if (isReplyEmail(email)) payload._replyto = email;
  return payload;
}

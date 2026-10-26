/**
 * Lead mail sent by FormSubmit (https://formsubmit.co).
 * No API key. The shop address is already public.
 * FormSubmit does not support a custom From name on this endpoint.
 */

export const LEAD_SUCCESS_MESSAGE =
  'Thanks, we got your request. A local electrician will call you shortly.';

export const LEAD_ERROR_BEFORE = "We couldn't send that. Call ";
export const LEAD_ERROR_AFTER = " and we'll take it from here.";

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
  if (town) payload.Town = town;
  if (company) payload.Company = company;
  if (input.smsConsent === 'yes' || input.smsConsent === 'no') {
    payload['SMS consent'] = input.smsConsent;
  }
  if (isReplyEmail(email)) payload._replyto = email;
  return payload;
}

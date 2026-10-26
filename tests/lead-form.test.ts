import assert from 'node:assert/strict';
import { afterEach, describe, it, mock } from 'node:test';
import {
  LEAD_ERROR_AFTER,
  LEAD_ERROR_BEFORE,
  LEAD_REQUEST_TIMEOUT_MS,
  LEAD_STILL_SENDING_MS,
  LEAD_SUCCESS_MESSAGE,
  LEAD_UNCERTAIN_AFTER,
  LEAD_UNCERTAIN_BEFORE,
  leadResponseAccepted,
} from '../src/lib/lead-form.ts';
import { sendLead } from '../src/scripts/lead-form.ts';

const PHONE = '(605) 250-4838';
const PHONE_HREF = 'tel:+16052504838';
const ENDPOINT = 'https://formsubmit.co/ajax/office@siouxfalls-electrician.com';
const CONTACT_SUCCESS = `Thanks. We got your note. Midwest Leads LLC will reply and connect you with a local licensed electrician. You can also call ${PHONE}.`;

class FakeNode {
  textContent = '';
  childNodes: FakeNode[] = [];

  append(...nodes: Array<FakeNode | string>): void {
    for (const node of nodes) {
      if (typeof node === 'string') {
        const text = new FakeText();
        text.textContent = node;
        this.childNodes.push(text);
      } else {
        this.childNodes.push(node);
      }
    }
  }
}

class FakeText extends FakeNode {}

class FakeElement extends FakeNode {
  readonly tagName: string;
  hidden = false;
  className = '';
  href = '';
  disabled = false;
  dataset: Record<string, string> = {};
  attributes = new Map<string, string>();
  focused = false;

  constructor(tag: string) {
    super();
    this.tagName = tag.toUpperCase();
  }

  setAttribute(name: string, value: string): void {
    this.attributes.set(name, value);
  }

  getAttribute(name: string): string | null {
    return this.attributes.get(name) ?? null;
  }

  removeAttribute(name: string): void {
    this.attributes.delete(name);
  }

  replaceChildren(...nodes: Array<FakeNode | string>): void {
    this.childNodes = [];
    this.append(...nodes);
  }

  focus(): void {
    this.focused = true;
  }
}

class HTMLInputElement extends FakeElement {
  name = '';
  value = '';
  type = 'text';
  checked = false;

  constructor() {
    super('input');
  }
}

class HTMLTextAreaElement extends FakeElement {
  name = '';
  value = '';

  constructor() {
    super('textarea');
  }
}

class HTMLSelectElement extends FakeElement {
  name = '';
  value = '';

  constructor() {
    super('select');
  }
}

class RadioNodeList {
  value = '';
}

class FakeButton extends FakeElement {
  type = 'submit';

  constructor(label: string) {
    super('button');
    this.textContent = label;
    this.setAttribute('type', 'submit');
  }
}

class FakeForm {
  dataset: Record<string, string> = {};
  attributes = new Map<string, string>();
  controls: Array<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement> = [];
  status = new FakeElement('p');
  button: FakeButton;
  valid = true;

  constructor(buttonLabel: string) {
    this.button = new FakeButton(buttonLabel);
    this.status.dataset = {};
    this.status.hidden = true;
  }

  elements = {
    namedItem: (name: string) => {
      const matches = this.controls.filter((control) => control.name === name);
      if (matches.length === 0) return null;
      const radios = matches.filter((control) => control instanceof HTMLInputElement && control.type === 'radio');
      if (radios.length > 1) {
        const list = new RadioNodeList();
        const checked = radios.find((control) => control instanceof HTMLInputElement && control.checked);
        list.value = checked instanceof HTMLInputElement ? checked.value : '';
        return list;
      }
      return matches[0];
    },
  };

  reportValidity(): boolean {
    return this.valid;
  }

  reset(): void {
    for (const control of this.controls) {
      if (control instanceof HTMLInputElement && control.type === 'checkbox') control.checked = false;
      if (control instanceof HTMLInputElement && control.type === 'radio') control.checked = false;
      control.value = '';
    }
  }

  setAttribute(name: string, value: string): void {
    this.attributes.set(name, value);
  }

  removeAttribute(name: string): void {
    this.attributes.delete(name);
  }

  querySelector(selector: string): FakeElement | null {
    if (selector === '[data-form-status]') return this.status;
    if (selector === 'button[type="submit"]') return this.button;
    return null;
  }
}

interface FormOptions {
  buttonLabel?: string;
  successMessage?: string;
  pathname?: string;
  project?: string;
  urgency?: string;
  sms?: boolean;
}

function installDom(pathname: string): void {
  Object.assign(globalThis, {
    HTMLInputElement,
    HTMLTextAreaElement,
    HTMLSelectElement,
    RadioNodeList,
    document: {
      createDocumentFragment: () => new FakeNode(),
      createElement: (tag: string) => new FakeElement(tag),
      createTextNode: (text: string) => {
        const node = new FakeText();
        node.textContent = text;
        return node;
      },
    },
    window: {
      location: {
        origin: 'https://www.siouxfalls-electrician.com',
        pathname,
      },
    },
  });
}

function addInput(form: FakeForm, name: string, value: string, type = 'text'): HTMLInputElement {
  const input = new HTMLInputElement();
  input.name = name;
  input.value = value;
  input.type = type;
  form.controls.push(input);
  return input;
}

function makeForm(options: FormOptions = {}): FakeForm {
  const pathname = options.pathname ?? '/contact';
  installDom(pathname);
  const form = new FakeForm(options.buttonLabel ?? 'Send');
  form.dataset.endpoint = ENDPOINT;
  form.dataset.phoneDisplay = PHONE;
  form.dataset.phoneHref = PHONE_HREF;
  if (options.successMessage) form.dataset.successMessage = options.successMessage;
  addInput(form, 'name', 'Ada Lovelace');
  addInput(form, 'phone', '605-555-0100');
  addInput(form, 'email', 'ada@example.com');
  addInput(form, '_honey', '');
  const town = new HTMLSelectElement();
  town.name = 'town';
  town.value = 'Sioux Falls';
  form.controls.push(town);
  const service = new HTMLSelectElement();
  service.name = 'service';
  service.value = 'Panel upgrade';
  form.controls.push(service);
  addInput(form, 'company', 'Example Co');
  const message = new HTMLTextAreaElement();
  message.name = 'message';
  message.value = 'The kitchen breaker keeps tripping.';
  form.controls.push(message);
  if (options.project) {
    addInput(form, 'project', 'Residential', 'radio').checked = options.project === 'Residential';
    const commercial = addInput(form, 'project', 'Commercial', 'radio');
    commercial.checked = options.project === 'Commercial';
  }
  if (options.urgency) {
    addInput(form, 'urgency', 'Emergency now', 'radio').checked = options.urgency === 'Emergency now';
    addInput(form, 'urgency', 'Soon', 'radio').checked = options.urgency === 'Soon';
  }
  if (options.sms) addInput(form, 'sms_consent', 'yes', 'checkbox').checked = true;
  return form;
}

function nodeText(node: FakeNode): string {
  if (node.childNodes.length === 0) return node.textContent;
  return node.childNodes.map((child) => nodeText(child)).join('');
}

function findLink(node: FakeNode): FakeElement | undefined {
  if (node instanceof FakeElement && node.tagName === 'A') return node;
  for (const child of node.childNodes) {
    const found = findLink(child);
    if (found) return found;
  }
  return undefined;
}

function statusText(form: FakeForm): string {
  return nodeText(form.status);
}

interface CapturedRequest {
  url: string;
  method: string;
  headers: Record<string, string>;
  body: string;
  signal: AbortSignal;
}

const originalFetch = globalThis.fetch;

afterEach(() => {
  globalThis.fetch = originalFetch;
  mock.timers.reset();
});

function captureFetch(response: () => Response | Promise<Response>): { calls: CapturedRequest[] } {
  const calls: CapturedRequest[] = [];
  globalThis.fetch = (async (input: RequestInfo | URL, init?: RequestInit) => {
    const headers = new Headers(init?.headers);
    const body = init?.body instanceof URLSearchParams ? init.body.toString() : String(init?.body ?? '');
    calls.push({
      url: String(input),
      method: init?.method ?? 'GET',
      headers: {
        accept: headers.get('accept') ?? '',
        'content-type': headers.get('content-type') ?? '',
      },
      body,
      signal: init?.signal as AbortSignal,
    });
    return response();
  }) as typeof fetch;
  return { calls };
}

function hangUntilAbort(): { calls: CapturedRequest[]; resolve: (response: Response) => void } {
  const calls: CapturedRequest[] = [];
  let resolve: (response: Response) => void = () => {};
  globalThis.fetch = ((input: RequestInfo | URL, init?: RequestInit) => {
    const headers = new Headers(init?.headers);
    const body = init?.body instanceof URLSearchParams ? init.body.toString() : String(init?.body ?? '');
    const signal = init?.signal as AbortSignal;
    calls.push({
      url: String(input),
      method: init?.method ?? 'GET',
      headers: {
        accept: headers.get('accept') ?? '',
        'content-type': headers.get('content-type') ?? '',
      },
      body,
      signal,
    });
    return new Promise((settle, reject) => {
      resolve = settle;
      signal.addEventListener('abort', () => {
        reject(new DOMException('The operation was aborted.', 'AbortError'));
      });
    });
  }) as typeof fetch;
  return { calls, get resolve() { return resolve; } } as { calls: CapturedRequest[]; resolve: (response: Response) => void };
}

describe('leadResponseAccepted', () => {
  it('accepts 2xx, including a string success flag and a non-JSON body', () => {
    assert.equal(leadResponseAccepted(200, { success: 'true' }), true);
    assert.equal(leadResponseAccepted(200, { success: true }), true);
    assert.equal(leadResponseAccepted(201, undefined), true);
    assert.equal(leadResponseAccepted(200, JSON.parse(JSON.stringify({ success: 'true' }))), true);
    assert.equal(leadResponseAccepted(200, '{"success":"true"}'), true);
    assert.equal(LEAD_REQUEST_TIMEOUT_MS >= 45_000 && LEAD_REQUEST_TIMEOUT_MS <= 60_000, true);
    assert.equal(LEAD_STILL_SENDING_MS, 8_000);
  });

  it('rejects 4xx, 5xx, and success=false even on a 200', () => {
    assert.equal(leadResponseAccepted(500, { success: 'true' }), false);
    assert.equal(leadResponseAccepted(422, { message: 'no' }), false);
    assert.equal(leadResponseAccepted(200, { success: false }), false);
    assert.equal(leadResponseAccepted(200, { success: 'false' }), false);
    assert.equal(leadResponseAccepted(200, '{"success":"false"}'), false);
  });
});

describe('sendLead', () => {
  it('shows success for a slow 2xx with success "true" and does not abort at the old 12s or 20s limits', async (t) => {
    t.mock.timers.enable({ apis: ['setTimeout'] });
    const form = makeForm({ successMessage: CONTACT_SUCCESS, project: 'Residential', urgency: 'Soon', sms: true });
    const pendingFetch = hangUntilAbort();
    const pending = sendLead(form as unknown as HTMLFormElement);

    assert.equal(form.button.textContent, 'Sending…');
    assert.equal(form.button.disabled, true);
    t.mock.timers.tick(LEAD_STILL_SENDING_MS - 1);
    assert.equal(form.button.textContent, 'Sending…');
    t.mock.timers.tick(1);
    assert.equal(form.button.textContent, 'Still sending…');

    t.mock.timers.tick(50_000 - LEAD_STILL_SENDING_MS);
    assert.equal(pendingFetch.calls[0]?.signal.aborted, false);
    assert.equal(form.status.hidden, true);
    assert.equal(form.button.textContent, 'Still sending…');

    pendingFetch.resolve(new Response(JSON.stringify({ success: 'true' }), { status: 200 }));
    await pending;

    assert.equal(pendingFetch.calls[0]?.signal.aborted, false);
    assert.equal(statusText(form), CONTACT_SUCCESS);
    assert.equal(form.status.dataset.state, 'success');
    assert.equal(form.status.getAttribute('role'), 'status');
    assert.equal(form.button.textContent, 'Send');
    assert.equal(form.button.disabled, false);
    assert.equal(form.controls.find((control) => control.name === 'name')?.value, '');

    const posted = new URLSearchParams(pendingFetch.calls[0]?.body);
    assert.equal(pendingFetch.calls.length, 1);
    assert.equal(pendingFetch.calls[0]?.url, ENDPOINT);
    assert.equal(pendingFetch.calls[0]?.method, 'POST');
    assert.equal(pendingFetch.calls[0]?.headers.accept, 'application/json');
    assert.equal(pendingFetch.calls[0]?.headers['content-type'], 'application/x-www-form-urlencoded');
    assert.equal(posted.get('Name'), 'Ada Lovelace');
    assert.equal(posted.get('Phone'), '605-555-0100');
    assert.equal(posted.get('Email'), 'ada@example.com');
    assert.equal(posted.get('Service requested'), 'Panel upgrade');
    assert.equal(posted.get('Message'), 'The kitchen breaker keeps tripping.');
    assert.equal(posted.get('Town'), 'Sioux Falls');
    assert.equal(posted.get('Company'), 'Example Co');
    assert.equal(posted.get('Project'), 'Residential');
    assert.equal(posted.get('Urgency'), 'Soon');
    assert.equal(posted.get('SMS consent'), 'yes');
    assert.equal(posted.get('Page'), 'https://www.siouxfalls-electrician.com/contact');
    assert.equal(posted.get('_subject'), 'New lead: Panel upgrade - Ada Lovelace');
    assert.equal(posted.get('_template'), 'basic');
    assert.equal(posted.get('_captcha'), 'false');
    assert.equal(posted.get('_honey'), '');
    assert.equal(posted.get('_replyto'), 'ada@example.com');
  });

  it('shows the soft message when FormSubmit never answers before the timeout', async (t) => {
    t.mock.timers.enable({ apis: ['setTimeout'] });
    const form = makeForm({ pathname: '/', buttonLabel: 'Request service' });
    hangUntilAbort();
    const pending = sendLead(form as unknown as HTMLFormElement);

    t.mock.timers.tick(LEAD_REQUEST_TIMEOUT_MS - 1);
    assert.equal(form.button.textContent, 'Still sending…');
    assert.equal(form.status.hidden, true);

    t.mock.timers.tick(1);
    await pending;

    const text = statusText(form);
    assert.equal(text, `${LEAD_UNCERTAIN_BEFORE}${PHONE}${LEAD_UNCERTAIN_AFTER}`);
    assert.equal(text.includes(LEAD_ERROR_BEFORE), false);
    assert.equal(form.status.dataset.state, 'success');
    const link = findLink(form.status);
    assert.equal(link?.href, PHONE_HREF);
    assert.equal(link?.textContent, PHONE);
    assert.equal(link?.className, 'text-link');
    assert.equal(form.button.textContent, 'Request service');
    assert.equal(form.button.disabled, false);
  });

  it('shows the hard error for an HTTP 500 and keeps the fields', async () => {
    const form = makeForm({ successMessage: CONTACT_SUCCESS });
    const { calls } = captureFetch(() => new Response(JSON.stringify({ success: 'false', message: 'nope' }), { status: 500 }));
    await sendLead(form as unknown as HTMLFormElement);

    const text = statusText(form);
    assert.equal(text, `${LEAD_ERROR_BEFORE}${PHONE}${LEAD_ERROR_AFTER}`);
    assert.equal(form.status.dataset.state, 'error');
    assert.equal(form.status.getAttribute('role'), 'alert');
    const link = findLink(form.status);
    assert.equal(link?.href, PHONE_HREF);
    assert.equal(link?.textContent, PHONE);
    assert.equal(form.button.textContent, 'Send');
    assert.equal(form.button.disabled, false);
    assert.equal(form.controls.find((control) => control.name === 'name')?.value, 'Ada Lovelace');
    assert.equal(calls.length, 1);
    assert.equal(calls[0]?.url, ENDPOINT);
  });

  it('shows the hard error for a 200 that says success false', async () => {
    const form = makeForm();
    captureFetch(() => new Response('{"success":"false"}', { status: 200 }));
    await sendLead(form as unknown as HTMLFormElement);
    assert.equal(statusText(form), `${LEAD_ERROR_BEFORE}${PHONE}${LEAD_ERROR_AFTER}`);
    assert.equal(form.status.dataset.state, 'error');
    assert.equal(form.controls.find((control) => control.name === 'message')?.value, 'The kitchen breaker keeps tripping.');
  });

  it('treats a non-JSON 2xx as success for the homepage form', async () => {
    const form = makeForm({ pathname: '/', buttonLabel: 'Request service' });
    captureFetch(() => new Response('<html>ok</html>', { status: 200, headers: { 'content-type': 'text/html' } }));
    await sendLead(form as unknown as HTMLFormElement);
    assert.equal(statusText(form), LEAD_SUCCESS_MESSAGE);
    assert.equal(form.status.dataset.state, 'success');
    assert.equal(form.button.textContent, 'Request service');
  });

  it('shows the soft message when the network fails after the request is sent', async () => {
    const form = makeForm();
    globalThis.fetch = (async () => {
      throw new TypeError('Failed to fetch');
    }) as typeof fetch;
    await sendLead(form as unknown as HTMLFormElement);
    assert.equal(statusText(form), `${LEAD_UNCERTAIN_BEFORE}${PHONE}${LEAD_UNCERTAIN_AFTER}`);
    assert.equal(findLink(form.status)?.href, PHONE_HREF);
    assert.equal(form.status.dataset.state, 'success');
  });

  it('does not post when the honeypot is filled', async () => {
    const form = makeForm({ successMessage: CONTACT_SUCCESS });
    const honey = form.controls.find((control) => control.name === '_honey');
    if (honey) honey.value = 'https://spam.example';
    let called = false;
    globalThis.fetch = (async () => {
      called = true;
      throw new Error('live post');
    }) as typeof fetch;
    await sendLead(form as unknown as HTMLFormElement);
    assert.equal(called, false);
    assert.equal(statusText(form), CONTACT_SUCCESS);
  });
});

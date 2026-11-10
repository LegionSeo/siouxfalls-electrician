/** Stable id for an existing FAQ question, so new copy can link to it. */
export function faqAnchor(question: string): string {
  const slug = question
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
  return `faq-${slug}`;
}

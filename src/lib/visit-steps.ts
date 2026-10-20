export function visitSteps(visit: string): { title: string; text: string }[] {
  const sentences = visit.match(/[^.!?]+[.!?]+/g)?.map((sentence) => sentence.trim()).filter(Boolean) ?? [visit];
  const size = Math.max(1, Math.ceil(sentences.length / 3));
  const titles = ['You call', 'On site', 'The work'];
  return titles
    .map((title, index) => ({
      title,
      text: sentences.slice(index * size, (index + 1) * size).join(' '),
    }))
    .filter((step) => step.text.length > 0);
}

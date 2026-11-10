import { selectGenerator } from '../content/calculators';

export function bindGeneratorCalculator(root: ParentNode = document): void {
  const tool = root.querySelector<HTMLElement>('[data-generator-calculator]');
  if (!tool || tool.dataset.genBound === 'true') return;
  tool.dataset.genBound = 'true';

  const home = tool.querySelector<HTMLSelectElement>('[data-gen-home]');
  const cover = tool.querySelector<HTMLSelectElement>('[data-gen-cover]');
  const result = tool.querySelector<HTMLElement>('[data-gen-result]');
  if (!home || !cover || !result) return;

  const apply = () => {
    const selection = selectGenerator(home.value, cover.value);
    result.textContent = selection.range;
    document.querySelectorAll<HTMLInputElement>('[data-calculator-job]').forEach((input) => {
      input.value = selection.job;
    });
    document.querySelectorAll<HTMLInputElement>('[data-calculator-range]').forEach((input) => {
      input.value = selection.range;
    });
    document.querySelectorAll<HTMLInputElement>('[data-calculator-service]').forEach((input) => {
      input.value = selection.service;
    });
  };

  home.addEventListener('change', apply);
  cover.addEventListener('change', apply);
  apply();
}

import { costJobById, selectCost } from '../content/calculators';

function setFields(job: string, range: string, service: string): void {
  document.querySelectorAll<HTMLInputElement>('[data-calculator-job]').forEach((input) => {
    input.value = job;
  });
  document.querySelectorAll<HTMLInputElement>('[data-calculator-range]').forEach((input) => {
    input.value = range;
  });
  document.querySelectorAll<HTMLInputElement>('[data-calculator-service]').forEach((input) => {
    input.value = service;
  });
}

export function bindCostCalculator(root: ParentNode = document): void {
  const tool = root.querySelector<HTMLElement>('[data-cost-calculator]');
  if (!tool || tool.dataset.costBound === 'true') return;
  tool.dataset.costBound = 'true';

  const jobSelect = tool.querySelector<HTMLSelectElement>('[data-cost-job]');
  const optionWrap = tool.querySelector<HTMLElement>('[data-option-wrap]');
  const optionSelect = tool.querySelector<HTMLSelectElement>('[data-cost-option]');
  const optionLabel = tool.querySelector<HTMLElement>('[data-option-label]');
  const result = tool.querySelector<HTMLElement>('[data-cost-result]');
  const sizeLink = tool.querySelector<HTMLElement>('[data-size-link]');
  if (!jobSelect || !optionWrap || !optionSelect || !optionLabel || !result) return;

  const fillOptions = (selectedId: string) => {
    const job = costJobById(jobSelect.value);
    optionSelect.replaceChildren();
    if (!job.options || job.options.length === 0) {
      optionWrap.hidden = true;
      return;
    }
    optionWrap.hidden = false;
    optionLabel.textContent = job.optionPrompt || 'Option';
    for (const option of job.options) {
      const node = document.createElement('option');
      node.value = option.id;
      node.textContent = option.label;
      if (option.id === selectedId) node.selected = true;
      optionSelect.append(node);
    }
  };

  const apply = (keepOption: boolean) => {
    const previous = keepOption ? optionSelect.value : '';
    fillOptions(previous);
    const selection = selectCost(jobSelect.value, optionSelect.value);
    result.textContent = selection.range;
    setFields(selection.job, selection.range, selection.service);
    if (sizeLink) sizeLink.hidden = selection.jobId !== 'generator';
  };

  const requested = new URLSearchParams(window.location.search).get('job');
  if (requested && costJobById(requested).id === requested) jobSelect.value = requested;

  jobSelect.addEventListener('change', () => apply(false));
  optionSelect.addEventListener('change', () => apply(true));
  apply(false);
}

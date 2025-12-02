import { fetchJSON } from './utils.js';

async function renderCards(jsonPath, containerId, cardClass) {
  const container = document.querySelector(containerId);
  const data = await fetchJSON(jsonPath);
  if (!data) {
    container.innerHTML = "<p>Failed to load data.</p>";
    return;
  }
  container.innerHTML = data.map(item => `
    <div class="${cardClass}">
      <img src="${item.img}" alt="${item.title}" loading="lazy">
      <h3>${item.title}</h3>
      ${item.date ? `<p>${item.date}</p>` : ""}
      <p>${item.desc}</p>
    </div>
  `).join('');
}

document.addEventListener('DOMContentLoaded', () => {
  renderCards('./data/training.json', '#training-tips', 'training-card');
  renderCards('./data/events.json', '#featured-events', 'card');
});

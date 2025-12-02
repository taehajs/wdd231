import { loadData } from './utils.js';

const container = document.querySelector('#featured-events');

async function loadEvents() {
  try {
    const data = await loadData('data/events.json'); 
    container.innerHTML = data.map(ev => `
      <div class="card">
        <h3>${ev.name}</h3>
        <p>${ev.date}</p>
        <p>${ev.location}</p>
      </div>
    `).join('');
  } catch (err) {
    console.error('Error loading events:', err);
    container.innerHTML = "<p class='error'>Unable to load events.</p>";
  }
}

loadEvents();

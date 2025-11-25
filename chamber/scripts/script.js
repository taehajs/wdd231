import { places } from '../data/places.mjs';

const gallery = document.getElementById('gallery');
const visitMessage = document.getElementById('visit-message');
const yearEl = document.getElementById('year');

yearEl.textContent = new Date().getFullYear();

gallery.innerHTML = places.map(place => `
  <article class="card">
    <figure><img src="${place.img}" alt="${place.title}"></figure>
    <h2>${place.title}</h2>
    <address>${place.address}</address>
    <p>${place.desc}</p>
    <button data-id="${place.id}">Learn more</button>
  </article>
`).join('');

const KEY = "last-visit";
const now = Date.now();
const last = localStorage.getItem(KEY);

if (!last) {
  visitMessage.textContent = "Welcome! Let us know if you have any questions.";
} else {
  const diff = now - last;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  if (days < 1) visitMessage.textContent = "Back so soon! Awesome!";
  else visitMessage.textContent = `You last visited ${days} ${days === 1 ? 'day' : 'days'} ago.`;
}
localStorage.setItem(KEY, now);

gallery.addEventListener("click", e => {
  if (e.target.tagName !== "BUTTON") return;
  const place = places.find(p => p.id == e.target.dataset.id);
  alert(`${place.title}
${place.address}

${place.desc}`);
});
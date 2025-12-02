import { fetchJSON } from './utils.js';

document.addEventListener("DOMContentLoaded", async () => {
  const container = document.getElementById("event-list");
  const data = await fetchJSON("./data/events.json");

  if (!data) {
    container.innerHTML = "<p>Failed to load events.</p>";
    return;
  }

  data.forEach(ev => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
      <img src="${ev.img}" alt="${ev.title}" loading="lazy">
      <h3>${ev.title}</h3>
      <p>${ev.date}</p>
      <p>${ev.desc}</p>
    `;
    container.appendChild(div);
  });
});

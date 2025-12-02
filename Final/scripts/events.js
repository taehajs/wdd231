import { fetchJSON } from "./utils.js";

document.addEventListener("DOMContentLoaded", async () => {
  const container = document.querySelector("#event-list");

  const data = await fetchJSON("./data/events.json");

  if (!data) {
    container.innerHTML = "<p>Failed to load events.</p>";
    return;
  }

  data.events.forEach(ev => {
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `
      <h3>${ev.title}</h3>
      <p>${ev.date}</p>
      <p>${ev.description}</p>
    `;
    container.appendChild(div);
  });
});

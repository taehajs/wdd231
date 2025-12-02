import { fetchJSON } from "./utils.js";

document.addEventListener("DOMContentLoaded", async () => {
  const container = document.querySelector("#drills");

  const data = await fetchJSON("./data/training.json"); 

  if (!data) {
    container.innerHTML = "<p>Failed to load training data.</p>";
    return;
  }

  data.forEach(item => {
    const div = document.createElement("div");
    div.classList.add("training-card");
    div.innerHTML = `
      <h3>${item.title}</h3>
      <p>${item.description}</p>
      <img src="${item.image}" alt="${item.title}" loading="lazy">
    `;
    container.appendChild(div);
  });
});

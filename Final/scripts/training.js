import { fetchJSON } from "./utils.js";

const drillsContainer = document.querySelector("#drills");
const modal = document.querySelector("#modal");
const modalTitle = document.querySelector("#modal-title");
const modalImg = document.querySelector("#modal-img");
const modalDescription = document.querySelector("#modal-description");
const modalLevel = document.querySelector("#modal-level");
const modalClose = document.querySelector("#modal-close");
const favoriteBtn = document.querySelector("#favorite-btn");


function openModal(drill) {
  modalTitle.textContent = drill.title;
  modalImg.src = drill.image;
  modalImg.alt = drill.title;
  modalDescription.textContent = drill.description;
  modalLevel.textContent = "Level: " + drill.level;
  modal.style.display = "block";

  favoriteBtn.onclick = () => {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    if (!favorites.includes(drill.id)) {
      favorites.push(drill.id);
      localStorage.setItem("favorites", JSON.stringify(favorites));
      alert(`${drill.title} added to favorites!`);
    }
  };
}


modalClose.onclick = () => modal.style.display = "none";
window.onclick = e => { if (e.target === modal) modal.style.display = "none"; };


async function loadDrills() {
  const data = await fetchJSON("./data/drills.json"); 
  data.drills.forEach(drill => {
    const card = document.createElement("div");
    card.classList.add("training-card", "card");
    card.innerHTML = `
      <img src="${drill.image}" alt="${drill.title}">
      <h3>${drill.title}</h3>
      <p>${drill.description.substring(0, 50)}...</p>
      <p>Level: ${drill.level}</p>
    `;
    card.addEventListener("click", () => openModal(drill));
    drillsContainer.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", loadDrills);

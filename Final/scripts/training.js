const drillsContainer = document.querySelector("#drills");
const modal = document.querySelector("#modal");
const modalTitle = document.querySelector("#modal-title");
const modalDesc = document.querySelector("#modal-description");
const modalImg = document.querySelector("#modal-img");
const modalClose = document.querySelector("#modal-close");

async function loadTraining() {
  try {
    const res = await fetch("./data/training.json");
    if (!res.ok) throw new Error("Failed to load JSON");
    const drills = await res.json();

    drills.forEach(drill => {
      const card = document.createElement("div");
      card.className = "training-card card";
      card.innerHTML = `
        <img src="${drill.image}" alt="${drill.title}" loading="lazy">
        <h3>${drill.title}</h3>
        <p>${drill.description.substring(0, 50)}...</p>
      `;

  
      card.addEventListener("click", () => {
        modalTitle.textContent = drill.title;
        modalDesc.textContent = drill.description;
        modalImg.src = drill.image;
        modalImg.alt = drill.title;
        modal.classList.remove("hidden");
      });

      drillsContainer.appendChild(card);
    });
  } catch (err) {
    drillsContainer.innerHTML = "<p>Unable to load training data.</p>";
    console.error(err);
  }
}

modalClose.addEventListener("click", () => modal.classList.add("hidden"));
modal.addEventListener("click", e => {
  if (e.target === modal) modal.classList.add("hidden");
});

loadTraining();

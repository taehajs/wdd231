document.addEventListener("DOMContentLoaded", async () => {
  const container = document.querySelector("#drills");

  try {
    const res = await fetch("data/training.json");
    const data = await res.json();

    container.innerHTML = data.map(item => `
      <div class="training-card card">
        <img src="${item.image}" alt="${item.title}" loading="lazy">
        <h3>${item.title}</h3>
        <p>${item.description}</p>
        <p>Level: ${item.level}</p>
      </div>
    `).join('');
  } catch (err) {
    console.error("Failed to load training data:", err);
    container.innerHTML = "<p>Training data could not be loaded.</p>";
  }
});

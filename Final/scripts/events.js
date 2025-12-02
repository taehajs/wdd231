document.addEventListener("DOMContentLoaded", async () => {
  const container = document.querySelector("#event-list");

  try {
    const res = await fetch("data/events.json");
    const data = await res.json();

    container.innerHTML = data.map(item => `
      <div class="card">
        <img src="${item.image}" alt="${item.title}" loading="lazy">
        <h3>${item.title}</h3>
        <p>${item.date}</p>
        <p>${item.location}</p>
      </div>
    `).join('');
  } catch (err) {
    console.error("Failed to load events:", err);
    container.innerHTML = "<p>Event data could not be loaded.</p>";
  }
});

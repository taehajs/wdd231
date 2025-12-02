document.addEventListener("DOMContentLoaded", async () => {
  const container = document.getElementById("event-list");
  if (!container) return;

  try {
    const response = await fetch("./data/events.json"); 
    if (!response.ok) throw new Error("Failed to fetch JSON");

    const events = await response.json();

    events.forEach(ev => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <img src="${ev.img}" alt="${ev.title}" loading="lazy">
        <h3>${ev.title}</h3>
        <p>${ev.date}</p>
        <p>${ev.desc}</p>
      `;
      container.appendChild(card);
    });

  } catch (error) {
    container.innerHTML = `<p>Failed to load events: ${error.message}</p>`;
    console.error(error);
  }
});

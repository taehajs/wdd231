const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
menuBtn.addEventListener("click", () => navLinks.classList.toggle("show"));


document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;


const API_KEY = "YOUR_OPENWEATHERMAP_API_KEY";
const LAT = 37.5665; // Example: Seoul
const LON = 126.9780;

async function loadWeather() {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${LAT}&lon=${LON}&appid=${API_KEY}&units=metric`
    );
    const data = await response.json();
    const current = data.list[0];
    document.getElementById("current-temp").textContent = `Temperature: ${current.main.temp.toFixed(1)}°C`;
    document.getElementById("weather-desc").textContent = `Condition: ${current.weather[0].description}`;

    const forecastList = document.getElementById("forecast-list");
    forecastList.innerHTML = "";
    for (let i = 8; i < 32; i += 8) { 
      const item = data.list[i];
      const li = document.createElement("li");
      const date = new Date(item.dt_txt).toLocaleDateString("en-US", { weekday: "short" });
      li.textContent = `${date}: ${item.main.temp.toFixed(1)}°C`;
      forecastList.appendChild(li);
    }
  } catch (err) {
    console.error("Weather data failed:", err);
  }
}
loadWeather();

async function loadSpotlight() {
  try {
    const res = await fetch("data/members.json");
    const members = await res.json();

    const eligible = members.filter(m => m.membership === "Gold" || m.membership === "Silver");
    const random = eligible.sort(() => 0.5 - Math.random()).slice(0, 3);

    const container = document.getElementById("spotlight-container");
    random.forEach(member => {
      const card = document.createElement("div");
      card.classList.add("spotlight-card");
      card.innerHTML = `
        <img src="images/${member.image}" alt="${member.name}">
        <h3>${member.name}</h3>
        <p>${member.address}</p>
        <p>${member.phone}</p>
        <a href="${member.website}" target="_blank">Visit Website</a>
        <p><strong>${member.membership} Member</strong></p>
      `;
      container.appendChild(card);
    });
  } catch (err) {
    console.error("Spotlight load failed:", err);
  }
}
loadSpotlight();

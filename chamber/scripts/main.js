document.addEventListener("DOMContentLoaded", () => {
  const membersContainer = document.getElementById("members");
  const gridBtn = document.getElementById("grid-view");
  const listBtn = document.getElementById("list-view");
  const menuBtn = document.getElementById("menu-btn");
  const navLinks = document.getElementById("nav-links");

  
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });

  gridBtn.addEventListener("click", () => {
    membersContainer.classList.add("grid-view");
    membersContainer.classList.remove("list-view");
    gridBtn.classList.add("active");
    listBtn.classList.remove("active");
  });

  listBtn.addEventListener("click", () => {
    membersContainer.classList.add("list-view");
    membersContainer.classList.remove("grid-view");
    listBtn.classList.add("active");
    gridBtn.classList.remove("active");
  });


  async function loadMembers() {
    try {
      const response = await fetch("data/members.json");
      if (!response.ok) throw new Error("Failed to load members.json");
      const data = await response.json();
      displayMembers(data.members);
    } catch (error) {
      console.error("Error loading members:", error);
      membersContainer.innerHTML = "<p class='error'>Failed to load member data. Please try again later.</p>";
    }
  }

  function displayMembers(members) {
    membersContainer.innerHTML = members.map(member => `
      <div class="member-card">
        <img src="images/${member.image}" alt="${member.name}" loading="lazy">
        <h3>${member.name}</h3>
        <p>${member.address}</p>
        <p>${member.phone}</p>
        <a href="${member.website}" target="_blank" rel="noopener">${member.website}</a>
        <p>Membership Level: <strong>${member.membership}</strong></p>
      </div>
    `).join('');
  }


  document.getElementById("year").textContent = new Date().getFullYear();
  document.getElementById("lastModified").textContent = document.lastModified;

  loadMembers();
});

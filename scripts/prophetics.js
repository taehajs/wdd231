const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';

const cards = document.querySelector('#cards');


async function getProphetData() {
  const response = await fetch(url);
  const data = await response.json();

  displayProphets(data.prophets);
}

getProphetData();

const displayProphets = (prophets) => {
  prophets.forEach((prophet) => {

    const card = document.createElement('section');
    const fullName = document.createElement('h2');
    const birthInfo = document.createElement('p');
    const portrait = document.createElement('img');

    fullName.textContent = `${prophet.name} ${prophet.lastname}`;
    birthInfo.innerHTML = `<strong>Date of Birth:</strong> ${prophet.birthdate}<br>
                           <strong>Place of Birth:</strong> ${prophet.birthplace}`;


    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname} - Prophet ${prophet.order}`);
    portrait.setAttribute('loading', 'lazy');
    portrait.setAttribute('width', '300');
    portrait.setAttribute('height', '400');

    card.appendChild(fullName);
    card.appendChild(birthInfo);
    card.appendChild(portrait);

    cards.appendChild(card);
  });
};

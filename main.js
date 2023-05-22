const burger = document.querySelector('img.burger');
const close = document.querySelector('.close');
function toggleMenu() {
    const menu = document.querySelector('#menu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}
burger.addEventListener('click', toggleMenu);
close.addEventListener('click', toggleMenu);

// Generate speakers section

const speakers = [
  {
    name: 'Dario Scilipoti',
    title: 'CEO | Bluebird Coffee Roastery',
    img: 'assets/speakers/dario.png',
    bio: 'Dario is the CEO of Bluebird Coffee Roastery, a specialty coffee roastery based in KZN',
    catergory: 'coffee',
  },
  {
    name: 'Ichsan Sandypratama',
    title: 'CEO | Google',
    img: 'assets/speakers/ichsan.jpg',
    bio: 'Ichsan is the CEO of Google, a search engine based in the US. He really likes coffee.',
    catergory: 'code',
  },
  {
    name: 'Manzi Tresor',
    title: 'Chief Design Officer | Apple',
    img: 'assets/speakers/manzi.jpeg',
    bio: 'As the Chief Design Officer of Apple, Manzi is the visionary driving the company\'s aesthetic and user experience strategy.',
    catergory: 'code',
  },
  {
    name: 'James Hoffmann',
    title: 'Weird Coffee Guy | YouTube',
    img: 'assets/speakers/james.jpeg',
    bio: 'A world-renowned coffee expert and champion, is a captivating figure in the specialty coffee industry, inspiring coffee enthusiasts with his knowledge, passion, and engaging storytelling.',
    catergory: 'coffee',
  },
];



document.addEventListener('DOMContentLoaded', () => {
  const title = document.createElement('h3');
  title.textContent = 'Featured Speakers';
  const hr = document.createElement('hr');
  const speakersSection = document.querySelector('#speakers');
  speakersSection.appendChild(title);
  speakersSection.appendChild(hr);
  const container = document.createElement('div');
  speakers.forEach((speaker) => {
    container.classList.add('speaker-content');
    const speakerCard = document.createElement('div');
    speakerCard.classList.add('speaker');
    speakerCard.innerHTML = `
      <img src="${speaker.img}" alt="${speaker.name}">
      <section>
        <h3>${speaker.name}</h3>
        <p class="subheading">${speaker.title}</p>
        <hr>
        <article>${speaker.bio}</article>
      </section>
    `;
    if (speaker.catergory === 'code') {
      speakerCard.classList.add('code');
    }
    container.appendChild(speakerCard);
  })

  speakersSection.appendChild(container);
  const button = document.createElement('button');
  button.textContent = 'MORE';
  speakersSection.appendChild(button);
});

const more = document.querySelector('#speakers button');

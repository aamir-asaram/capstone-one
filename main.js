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
  {
    name: 'Winston Thomas',
    title: 'South African Barista Champion 2020',
    img: 'assets/speakers/winston.png',
    bio: 'The South African Barista Champion is a master of his craft, capturing the hearts and palates of coffee enthusiasts with his exceptional skills and creativity.',
    catergory: 'coffee',
  },
  {
    name: 'Alex Lee',
    title: 'Java Programming Educator | YouTube',
    img: 'assets/speakers/alex.png',
    bio: 'Alex Lee is a charismatic and knowledgeable instructor who simplifies complex programming concepts, making Java accessible and enjoyable for learners of all levels.',
    catergory: 'code',
  },
];

function genSpeakers(loopTo) {
  const title = document.createElement('h3');
  title.textContent = 'Featured Speakers';
  const hr = document.createElement('hr');
  const speakersSection = document.querySelector('#speakers');
  speakersSection.appendChild(title);
  speakersSection.appendChild(hr);
  const container = document.createElement('div');
  for (let i = 0; i < loopTo; i++) {
    container.classList.add('speaker-content');
    const speakerCard = document.createElement('div');
    speakerCard.classList.add('speaker');
    speakerCard.innerHTML = `
      <img src="${speakers[i].img}" alt="${speakers[i].name}">
      <section>
        <h3>${speakers[i].name}</h3>
        <p class="subheading">${speakers[i].title}</p>
        <hr>
        <article>${speakers[i].bio}</article>
      </section>
    `;
    if (speakers[i].catergory === 'code') {
      speakerCard.classList.add('code');
    }
    container.appendChild(speakerCard);
  }
  speakersSection.appendChild(container);
  const button = document.createElement('button');
  const arrow = document.createElement('i');
  arrow.classList.add('fas', 'fa-angle-down', 'arrow');
  if (loopTo < speakers.length) {
  button.textContent = 'MORE';
  } else {
  button.textContent = 'LESS';
  arrow.style.rotate = '180deg';
  }
  button.appendChild(arrow);
  speakersSection.appendChild(button);
}

if (window.innerWidth >= 768) {
  document.addEventListener('DOMContentLoaded', genSpeakers(speakers.length));
} else {
  document.addEventListener('DOMContentLoaded', genSpeakers(2));
}

//generate function to add more speakers on click
const generateSpeakers = () => {
  const speakersSection = document.querySelector('#speakers');
  speakersSection.innerHTML = '';

  if (more.textContent === 'MORE') {
    genSpeakers(speakers.length);
    more = document.querySelector('#speakers button');
    more.addEventListener('click', generateSpeakers);
  } else {
    genSpeakers(2);
    more.textContent = 'MORE';
    more = document.querySelector('#speakers button');
    more.addEventListener('click', generateSpeakers);
  }
};

let more = document.querySelector('#speakers button');
more.addEventListener('click', generateSpeakers);

const speaker = document.querySelector('#speakers');
let desktop = false;
window.addEventListener('resize', () => {
  if (window.innerWidth >= 768 && !desktop) {
    console.log('desktop');
    desktop = true;
    speaker.innerHTML = '';
    genSpeakers(speakers.length);
    const more = document.querySelector('#speakers button');
    more.addEventListener('click', generateSpeakers);
  } else if (window.innerWidth < 768 && desktop) {
    desktop = false;
    console.log('mobile');
    speaker.innerHTML = '';
    genSpeakers(2);
    const more = document.querySelector('#speakers button');
    more.addEventListener('click', generateSpeakers);
  }
});

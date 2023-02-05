const button = document.querySelector('button');
const nav = document.querySelector('nav');
const paragraph = document.querySelector('p');

button.addEventListener('click', () => {
  nav.classList.toggle('nav-slide');
  paragraph.classList.toggle('fade');
});

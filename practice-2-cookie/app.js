const tl = gsap.timeline({ defaults: { duration: 0.75, ease: 'power1.out' } });
tl.fromTo(
  '.cookie-container',
  { scale: 0 },
  { scale: 1, ease: 'elastic.out(1, 0.4)', duration: 1 }
);
// Chaining, after first one is done
tl.fromTo(
  '.cookie',
  { opacity: 0, x: -50, rotation: '-45deg' },
  { opacity: 1, x: 0, rotation: 0 },
  '<50%'
);

tl.fromTo(
  '.text',
  { x: 30, opacity: 0 },
  { x: 0, opacity: 1 },
  '<' /*Syncing with previous*/
);

tl.fromTo(
  '.cookie',
  { y: 0, rotation: 0 },
  { y: -20, rotation: '-20deg', yoyo: true, repeat: -1 }
);

tl.fromTo(
  '#crumbs',
  { y: 0, rotation: 0 },
  { y: -20, yoyo: true, repeat: -1 },
  '<'
);

const button = document.querySelector('button');
button.addEventListener('click', () => {
  gsap.to('.cookie-container', {
    opacity: 0,
    display: 'none',
    y: 0,
    duration: 0.75,
    ease: 'power1.out',
  });
});

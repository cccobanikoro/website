let img = document.getElementById('img-altar');
let text = document.getElementById('text');
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
  let value = window.scrollY;

  text.style.marginTop = value * 2.5 + 'px';
  img.style.top = value * 1 + 'px';
});

window.addEventListener('scroll', function() {
  if (window.scrollY > 0) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

const typingText = document.querySelector(".sec-text");

const textLoad = () => {
  setTimeout(() => {
    typingText.textContent = "WORSHIP";
  }, 0);
  setTimeout(() => {
    typingText.textContent = "COMMUNITY";
  }, 4000);
  setTimeout(() => {
    typingText.textContent = "SERVICE";
  }, 8000);
}
textLoad();
setInterval(textLoad, 12000);

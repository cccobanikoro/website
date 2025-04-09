import "./navbar.js";

const bibleText = document.getElementById('index-bible-text1');
const bibleVerse = document.getElementById('index-bible-text2');

const bibleTextChange = () => {
  setTimeout(() => {
    bibleText.textContent = "A church is a place where you can feel at home, where you can put your root down, like a tree planted by rivers of water.";
    bibleVerse.textContent = "-Psalm 1:3";
  }, 0);
  setTimeout(() => {
    bibleText.textContent = `I rejoiced with those who said to me, 'Let us go to the house of the Lord.'`;
    bibleVerse.textContent = "-Psalm 122:1";
  }, 4000);
  setTimeout(() => {
    bibleText.textContent = 'Christ is the head of the church, which is his body.';
    bibleVerse.textContent = "-Colossians 1:18";
  }, 8000);
}
bibleTextChange();
setInterval(bibleTextChange, 12000);

/*
const text = document.getElementById('text-h2');
const imgAltar = document.getElementById('altar');

window.addEventListener('scroll', () => {
  let value = window.scrollY;

  text.style.marginTop = value * 1.5 + 'px';
}); */

/*
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
*/

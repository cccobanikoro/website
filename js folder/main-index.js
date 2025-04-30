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

//Reveal elements on scroll

/*
window.addEventListener('scroll', reveal);
  window.addEventListener('load', reveal); // Also reveal on page load

  function reveal() {
    const reveals = document.querySelectorAll('.reveal');

    for (let i = 0; i < reveals.length; i++) {
      const windowHeight = window.innerHeight;
      const revealTop = reveals[i].getBoundingClientRect().top;
      const revealPoint = 300;

      if (revealTop < windowHeight - revealPoint) {
        reveals[i].classList.add('active');
      } else {
        reveals[i].classList.remove('active');
      }
    }
  }

  window.addEventListener('load', () => {
    setTimeout(reveal, 200); // Give layout time to settle
  });

  console.log('Scroll event fired');
  console.log(reveal);

*/

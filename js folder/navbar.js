const body = document.body;
const navToggle = document.getElementById('nav-toggle');

navToggle.addEventListener('change', function() {
  if (navToggle.checked) {
    body.classList.add('no-scroll');
  } else {
    body.classList.remove('no-scroll');
  }
});

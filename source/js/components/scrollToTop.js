const scrollBtn = document.querySelector('.sticky');
const offset = 100;

const getTop = () => window.pageYOffset || document.documentElement.scrollTop;

window.addEventListener('scroll', () => {
  if( getTop() > offset) {
    scrollBtn.classList.add('active');
  } else {
    scrollBtn.classList.remove('active');
  }
});

scrollBtn.addEventListener('click', function (e) {
  e.preventDefault();

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

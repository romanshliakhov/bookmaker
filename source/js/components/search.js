const search = document.querySelector('.header__search');
const icon = document.querySelector('.header__search-icon');

icon.addEventListener('click', () => {
  search.classList.toggle('active');
});

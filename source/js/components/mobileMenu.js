const mobileMenu = function() {
  const menu = document.querySelector('.nav__menu');
  const navLi = menu.querySelector('.nav__menu-item');


  const navLiSecond = menu.querySelector('.nav__second-item');
  // const navLi = menu.querySelector('li');
  // const navLi = menu.querySelectorAll('li');
  const navHandler = menu.querySelector('.nav__menu-title');
  const navHandlerSecond = menu.querySelector('.nav__second-title');

  // navLi.forEach((li) => {
  //   navHandler.addEventListener('click', () => {
  //     li.classList.add('active');
  //   })
  // })

  navHandler.addEventListener('click', () => {
    navLi.classList.toggle('active');
  })

  navHandlerSecond.addEventListener('click', () => {
    navLiSecond.classList.toggle('active');
  })
}

mobileMenu();



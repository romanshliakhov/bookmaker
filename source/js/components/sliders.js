import Swiper from '../vendor/swiper.js';

let recommendationSlider = new Swiper(".game-page__slider", {
  slidesPerView: 2,
  spaceBetween: 16,
  freeMode: true,
  observer: true,
  loop: true,
  navigation: {
    nextEl: ".game-page__slider-btn--next",
    prevEl: ".game-page__slider-btn--prev",
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 4,
      spaceBetween: 16,
    },
    1240: {
      slidesPerView: 6,
      spaceBetween: 24,
    }
  },
});




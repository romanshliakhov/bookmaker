import Swiper from '../vendor/swiper.js';

let reviewsSlider = new Swiper(".feedbacks__slider", {
  slidesPerView: 'auto',
  spaceBetween: 14,
  freeMode: true,
  observer: true,
  loop: true,
  adaptiveHeight: true,
  navigation: {
    nextEl: ".feedbacks__slider-btn--next",
    prevEl: ".feedbacks__slider-btn--prev",
    clickable: true,
  },
  pagination: {
    el: ".feedbacks__slider-pagination",
  },
});




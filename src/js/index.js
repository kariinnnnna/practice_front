import Swiper from "swiper";
import { Navigation } from "swiper/modules";

const reviewsSlider = document.querySelector(".reviews__slider");

if (reviewsSlider) {
  new Swiper(reviewsSlider, {
    modules: [Navigation],
    slidesPerView: 2,
    spaceBetween: 28,
    speed: 600,
    navigation: {
      prevEl: ".reviews__prev",
      nextEl: ".reviews__next",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 16,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 28,
      },
    },
  });
}

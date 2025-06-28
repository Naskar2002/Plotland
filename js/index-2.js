const aboutSwiper = new Swiper("#testimonial-2", {
  // Optional parameters
  direction: "horizontal",
  slidesPerView: 3,
  spaceBetween: 12,
  loop: true,
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },

  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    clickable: true,
  },
  breakpoints: {
    680: {
      slidesPerView: 2,
      spaceBetween: 8,
    },
    576: {
      slidesPerView: 1,
      spaceBetween: 4,
    },
    425: {
      slidesPerView: 1,
      spaceBetween: 7,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 5,
    },
  },
});
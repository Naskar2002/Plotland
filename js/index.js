// aos initialization
AOS.init();

// Nav-bar

const navCollapse = document.querySelector(".nav-collapse");
const menu = document.querySelector(".ham");

menu.addEventListener("click", () => {
  navCollapse.classList.toggle("active");
});

// Banner-swiper

const bannerSwiper = new Swiper("#banner-swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  effect: "fade",
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

// testimonialSwiper

const swiper = new Swiper("#testimonial", {
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

const mediaSwiper = new Swiper("#media-swiper", {
  direction: "horizontal",
  slidesPerView: 1,
  spaceBetween: 6,
  loop: true,

  
});

// blog-section-swiper

const blogSwiper = new Swiper("#blog", {
  direction: "horizontal",
  slidesPerView: 3,
  spaceBetween: 24,
  loop: true,

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
      slidesPerView: 1.2,
      spaceBetween: 8,
    },
    425: {
      slidesPerView: 1.2,
      spaceBetween: 7,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 5,
    },
  },
});

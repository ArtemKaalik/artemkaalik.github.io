var swiper = new Swiper(".slider", {
  loop: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  spaceBetween: 30,
  slideToClickedSlide: true,
  freeMode: false,
  pagination: {
      el: ".swiper-pagination",
      clickable: true,
  },
  mousewheel: false,
  keyboard: true,
  autoplay: {
      delay: 3500,
      disableOnInteraction: false,
  },
  breakpoints: {
      412: {
          slidesPerView: 2,
          spaceBetween: 0,
      },
      640: {
          slidesPerView: 2,
          spaceBetween: 0,
      },
      768: {
          slidesPerView: 3,
          spaceBetween: 10,
      },
      1024: {
          slidesPerView: 4,
          spaceBetween: 30,
      },
      1366: {
          slidesPerView: 4,
          spaceBetween: 30,
      }
  }
});

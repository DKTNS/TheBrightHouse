document.addEventListener("DOMContentLoaded", function () {
  const mySwiper = new Swiper(".my-carousel", {
    // Параметры карусели
    loop: true, // Бесконечная карусель
    autoplay: {
      delay: 500, // Автопрокрутка каждые 3 секунды
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
});

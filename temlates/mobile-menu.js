document.addEventListener("DOMContentLoaded", function () {
  // Элементы DOM
  const mobileNavToggler = document.querySelector(".mobile-nav-toggler");
  const mobileNav = document.querySelector(".mobile-nav");
  const closeBtn = document.querySelector(".close-btn");
  const menuBackdrop = document.querySelector(".menu-backdrop");
  const dropdownBtns = document.querySelectorAll(".dropdown-btn");
  const dropdownLinks = document.querySelectorAll(".navigation > li > a");

  // Функция открытия мобильного меню
  function openMobileNav() {
    mobileNav.classList.add("active");
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
  }

  // Функция закрытия мобильного меню
  function closeMobileNav() {
    mobileNav.classList.remove("active");
    document.body.style.overflow = "";
    document.documentElement.style.overflow = "";

    // Закрываем все открытые dropdown
    document.querySelectorAll(".dropdown.active").forEach((item) => {
      item.classList.remove("active");
    });

    // Добавляем небольшую задержку перед скрытием
    setTimeout(() => {
      if (!mobileNav.classList.contains("active")) {
        mobileNav.style.display = "none";
      }
    }, 300);
  }

  // Инициализация - гарантируем, что меню скрыто
  mobileNav.style.display = "none";
  mobileNav.classList.remove("active");

  // Открытие мобильного меню
  mobileNavToggler.addEventListener("click", function (e) {
    e.stopPropagation();
    mobileNav.style.display = "block";
    setTimeout(openMobileNav, 10);
  });

  // Закрытие мобильного меню
  closeBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    closeMobileNav();
  });

  menuBackdrop.addEventListener("click", function (e) {
    e.stopPropagation();
    closeMobileNav();
  });

  // Обработка dropdown
  dropdownBtns.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      const parent = this.parentElement;
      parent.classList.toggle("active");
    });
  });

  // Для ссылок с подменю - предотвращаем переход по ссылке при клике
  dropdownLinks.forEach((link) => {
    const parent = link.parentElement;
    if (parent.classList.contains("dropdown")) {
      link.addEventListener("click", function (e) {
        if (window.innerWidth <= 991) {
          e.preventDefault();
          parent.classList.toggle("active");
        }
      });
    }
  });

  // Закрытие меню при клике на ссылку без подменю
  document.querySelectorAll(".navigation a").forEach((link) => {
    if (!link.parentElement.classList.contains("dropdown")) {
      link.addEventListener("click", closeMobileNav);
    }
  });

  // Закрытие меню при изменении размера окна на desktop
  window.addEventListener("resize", function () {
    if (window.innerWidth > 991) {
      closeMobileNav();
    }
  });

  // Закрытие меню при клике вне области меню
  document.addEventListener("click", function (e) {
    if (
      mobileNav.classList.contains("active") &&
      !e.target.closest(".menu-box") &&
      !e.target.closest(".mobile-nav-toggler")
    ) {
      closeMobileNav();
    }
  });

  // Предотвращаем всплытие события внутри меню
  document.querySelector(".menu-box").addEventListener("click", function (e) {
    e.stopPropagation();
  });
});

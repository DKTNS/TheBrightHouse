$(document).ready(function(){
    var swiper = new Swiper(".mySwiper-banner-one-in-two", {
        spaceBetween: 0,
        mousewheelControl: true,
        effect: 'fade',
        autoplay: {
            delay: 5000,
        },
        keyboard: {
            enabled: true,
        },
        speed: 1000,
        loop: true,
        "navigation": { 
            "nextEl": ".slider-one-slide-next-1", 
            "prevEl": ".slider-one-slide-prev-1"
        }
    });
});
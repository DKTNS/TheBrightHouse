$(function () {
    var slider = tns({
        container: '#mn-carousel-gallery',
        controlsText: ['<i class="fa-solid fa-arrow-left"></i>','<i class="fa-solid fa-arrow-right"></i>'],
        mouseDrag: true, 
        gutter: 48, 
        loop: true, 
        items: 1, 
        nav: false
    });
    
    $('.tns-controls').addClass('mn-controls'); 
});
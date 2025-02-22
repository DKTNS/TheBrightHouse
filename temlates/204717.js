function headerStyle() {
    if($('.main-header').length){
        var windowpos = window.scrollY;
        var siteHeader = $('.main-header');
        var scrollLink = $('.scroll-top');
        if (windowpos >= 250) {
            siteHeader.addClass('fixed-header');
            scrollLink.fadeIn(300);
        } else {
            siteHeader.removeClass('fixed-header');
            scrollLink.fadeOut(300);
        }
    }
}

$(function () {
    //
    $("#callback-order-modal").on("shown.bs.modal", function () {
        $("#name-top-header-form").focus();
    })
    $("#phone-top-header-form").mask("+7 (999) 999-9999");
    $("#phone-top-header-form").on( "click", function() {
        if($("#phone-top-header-form").val() == '+7 (___) ___-____'){
            $("#phone-top-header-form").focus();
        }
    });
    //
    
    $('#send-btn-top-header-form').on( "click", function() {
        var name = $("#name-top-header-form").val();
        if(!name){
            $("#name-top-header-form").focus();
            return false;
        }
        var phone = $("#phone-top-header-form").val();
        if(!phone){
            $("#phone-top-header-form").focus();
            return false;
        }
        $("#name-top-header-form").val('').attr({'disabled': true});
        $("#phone-top-header-form").val('').attr({'disabled': true});
        $('#box-message-top-header-form').css({'display':'flex'});
        $.post('?template=callback-order', {
            'property:phone': phone,
            'property:name': name
        }, function(data){
        }, 'html');
    });
    
    if($('.mobile-menu').length){
    
        var mobileMenuContent = $('.main-header .nav-outer .main-menu').html();
        $('.mobile-menu .menu-box .menu-outer').append(mobileMenuContent);
        $('.sticky-header .main-menu').append(mobileMenuContent);
    
        //Dropdown Button
        $('.mobile-menu li.dropdown .dropdown-btn').on('click', function() {
            $(this).toggleClass('open');
            $(this).prev('ul').slideToggle(500);
        });
        
        //Menu Toggle Btn
        $('.mobile-nav-toggler').on('click', function() {
            $('body').addClass('mobile-menu-visible');
        });
        
        //Menu Toggle Btn
        $('.mobile-menu .menu-backdrop,.mobile-menu .close-btn').on('click', function() {
            $('body').removeClass('mobile-menu-visible');
        });
    }
    
    headerStyle();
    
    $(window).on('scroll', function(){
        headerStyle();
    });
});
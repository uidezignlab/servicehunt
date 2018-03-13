(function ($) {
    //dashboard navigation toggle

    $('.dash-nav-toggle').click(function (e) {
        e.preventDefault();
        $('.dash-side-nav').toggleClass('dash-side-toggle');
    });

    //dashboard carousel initialization

    $('.sts-slider').owlCarousel({
        items:5,
        margin:20,
        stagePadding:3,
        smartSpeed:450,
        autoplay: true,
        loop: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:5
            }
        }
    });

    //dashboard add service cover photo select


    //bootstrap tooltip initialization
    $('[data-toggle="tooltip"]').tooltip();


    var _landBanner = $('.landing-banner');
    var _clsNav, _toggleMenu, _sideNav;
    _clsNav = $('.cls-nav');
    _toggleMenu = $('.toggle-mn');
    _sideNav = $('.side-nav');
    _landBanner.css({
        height: window.innerHeight,
        width: window.innerWidth - 15
    });
    $(window).resize(function () {
        _landBanner.css({
            height: window.innerHeight,
            width: window.innerWidth - 15
        });
        if ((window.innerWidth > 760) && _sideNav.hasClass('tgg')){
            _sideNav.removeClass('tgg');
        }
    });
    _toggleMenu.click(function () {
        _sideNav.toggleClass('tgg');
    });
    _clsNav.click(function () {
        _sideNav.removeClass('tgg');
    });


    //testimonials corousel initialization

    $('.owl-carousel').owlCarousel({
        animateOut: 'slideOutDown',
        animateIn: 'flipInX',
        items:1,
        margin:30,
        stagePadding:30,
        smartSpeed:450,
        autoplay: true,
        loop: true
    });


    //modal show hide animation


    function modalAnim(x) {
        $('.modal .modal-dialog')
            .attr('class', 'modal-dialog  ' + x + '  animated');
    }
    var _modal = $('.modal');
    _modal.on('show.bs.modal', function () {
        var anim = "zoomIn";
        modalAnim(anim);
    });
    _modal.on('hide.bs.modal', function () {
        var anim = "zoomOut";
        modalAnim(anim);
    });


    //scroll to top button
    var backTopBtn=600;
    var scrollSpeed=500;
    var topEl = $('.back-top');
    var topElChild = $('.back-top a');
    $(window).scroll(function(){
        if($(window).scrollTop()>=backTopBtn){
            topEl.addClass('appear');
        }else{
            topEl.removeClass('appear');}
    });
    topElChild.on('click',function(e){
        e.preventDefault();
        $('html, body').animate({scrollTop:0},scrollSpeed);return false;
    });


    //service navigation scroll animation


    $('.service-nav a[href^="#"]').on('click', function (event) {

        var target = $(this.getAttribute('href'));


        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 90
            }, scrollSpeed);
        }

    });


})($);
(function () {
    'use strict';

    // Home Carousel //
    const homeCarousel = $(".owl-carousel.home-carousel");
    homeCarousel.owlCarousel({
        autoplay: true,
        autoPlaySpeed: 5000,
        autoPlayTimeout: 5000,
        autoplayHoverPause: true,
        loop: true,
        margin: 0,
        items: 1,
        center: true,
        dots: false,
        nav: false,
        navText: [
            "<i class='owl-nav chevron-left'>", "<i class='owl-nav chevron-right'>"
        ],
        slideBy: "page",
        dragEndSpeed: 700,
        smartSpeed: 1e3,
        startPosition: 0,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn'
    });

    window.dispatchEvent(new Event('resize'));
})();
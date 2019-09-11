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
        startPosition: 0,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn'
    });

    homeCarousel.on('change.owl.carousel', function (event) {
        var captions = $(this).find('[data-animated="true"]');
        captions.removeClass('animated fadeInLeft');
        setTimeout(() => {
            captions.addClass('animated fadeInLeft');
        }, 2)
    });

    window.dispatchEvent(new Event('resize'));
})();
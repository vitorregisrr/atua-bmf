(function () {
    'use strict';

    $('.nav-toggler').click(function () {
        $('#main-nav-menu').toggleClass('active');
        $('.main-nav__dropdown.active').removeClass('active');
    });

    $('.main-nav .has-dropdown > a').click(function (e) {
        e.preventDefault();

        $('.main-nav__dropdown.active').removeClass('active');
        $(this)
            .parent()
            .find('.main-nav__dropdown')
            .toggleClass('active');
    });

})();
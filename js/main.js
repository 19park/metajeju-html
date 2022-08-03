jQuery(document).ready(function ($) {
    "use strict";

    var siteMenuClone = function () {

        $(window).resize(function () {
            var $this = $(this),
                w = $this.width();

            if (w > 768) {
                if ($('body').hasClass('offcanvas-menu')) {
                    $('body').removeClass('offcanvas-menu');
                }
            }
        });

        $('body').on('click', '.js-menu-toggle', function (e) {
            var $this = $(this);
            e.preventDefault();

            if ($('body').hasClass('offcanvas-menu')) {
                $('body').removeClass('offcanvas-menu');
                $this.removeClass('active');
            } else {
                $('body').addClass('offcanvas-menu');
                $this.addClass('active');
            }
        });
    };
    siteMenuClone();


    var siteSticky = function () {
        $(".js-sticky-header").sticky({topSpacing: 0});
    };
    siteSticky();

    // navigation
    var OnePageNavigation = function () {
        var navToggler = $('.site-menu-toggle');
        $("body").on("click", ".main-menu li a[href^='#'], .smoothscroll[href^='#'], .site-mobile-menu .site-nav-wrap li a.nav-link", function (e) {
            e.preventDefault();

            var hash = this.hash;
            if (!hash) {
                return true;
            }
            $('body').removeClass('offcanvas-menu');

            $('html, body').animate({
                'scrollTop': $(hash).offset().top - $(".site-navbar").height()
            }, 600, 'easeInOutCirc', function () {
                // window.location.hash = hash;
            });
        });
    };
    OnePageNavigation();

    var siteScroll = function () {
        $(window).scroll(function () {

            var st = $(this).scrollTop();

            if (st > 100) {
                $('.js-sticky-header').addClass('shrink');
            } else {
                $('.js-sticky-header').removeClass('shrink');
            }
        });
    };
    siteScroll();

    $(document).on({
        'show.bs.modal': function () {
            var zIndex = 1040 + (10 * $('.modal:visible').length);
            $(this).css('z-index', zIndex);
            setTimeout(function() {
                $('.modal-backdrop').not('.modal-stack').css('z-index', zIndex - 1).addClass('modal-stack');
            }, 0);
        },
        'hidden.bs.modal': function() {
            if ($('.modal:visible').length > 0) {
                // restore the modal-open class to the body element, so that scrolling works
                // properly after de-stacking a modal.
                setTimeout(function() {
                    $(document.body).addClass('modal-open');
                }, 0);
            }
        }
    }, '.modal');
});

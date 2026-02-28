$(document).ready(function(){

    const navbar = $("#mainNavbar");

    /* ============================== 1. Smooth Scroll ============================== */
    $('a.nav-link').on('click', function(event) {

        if (this.hash !== "") {
            event.preventDefault();

            let hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top - 70
            }, 800);

            $('.navbar-collapse').collapse('hide');
        }
    });


    /* ============================== 2. Navbar Background on Scroll ============================== */

    $(window).on('scroll', function() {

        if ($(window).scrollTop() > 50) {
            navbar.addClass("navbar-scrolled");
        } else {
            navbar.removeClass("navbar-scrolled");
        }

    });


    /* ============================== 3. Card Hover Animation ============================== */
    $('.product-card').hover(
            function() {
                $(this).addClass('shadow-lg');
            },
            function() {
                $(this).removeClass('shadow-lg');
            }
        );

    });
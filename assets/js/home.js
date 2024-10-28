$(document).ready(function () {

    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });


    $('.showMoreBtn').click(function () {
        $('.products-box').slice(6, 29).removeClass('d-none'); // 6-dan 28-ə qədər olan elementləri göstər
        $('.showMoreBtn').addClass('d-none')
        $('.lessMoreBtn').removeClass('d-none')
        $('.lessMoreBtn').css('margin-top', '20px');
    });

    $('.lessMoreBtn').click(function () {
        $('.products-box').slice(6, 29).addClass('d-none'); // 6-dan 28-ə qədər olan elementləri göstər
        $('.lessMoreBtn').addClass('d-none')
        $('.showMoreBtn').removeClass('d-none')
    });


    $('#topbtn').click(function () {
        $('html').animate({
            scrollTop: 0
        }, 100)

    })

    $(window).scroll(function () {
        var header = $('#navbar'),
            scroll = $(window).scrollTop();
        let logo = $(".logo a h1")
        let logoA = $(".logo a")
        let navs = $(".navs ul li a")
        if (scroll >= 150) {
            header.css({
                'position': 'fixed',
                'top': '0',
                'left': '0',
                'right': '0',
                'z-index': '99999',
                'background-color': 'white',
                'box-shadow': 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
                'backdrop-filter': 'blur(10px)',
                'background': 'transparent',
                'height' : '100px'
            });
            logo.css({
                'color':'black',
                'margin-top' : '20px'
            })
            logoA.css({
                'text-decoration-color':'black',
                'margin-top' : '70px'
            })
            navs.css({
                'color':'black'
            })
        } else {
            header.css({
                'position': 'relative',
                'box-shadow': 'none',
                'height' : '60px',
            });
            logo.css({
                'color':'white',
                'text-decoration-color':'white',
                'margin-top' : '0px'
            })
            logoA.css({
                'text-decoration-color':'white',
                'margin-top' : '0px'
            })
            navs.css({
                'color':'white'
            })
        }
    });


    $("#navbar-phone .hamburger-icon i").on("click", function() {
        $("#navbar-phone .hamburger-menu").toggleClass("d-none");
    });

})
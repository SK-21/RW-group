$(document).ready(function() {
    var owl = $('.testimonials-section .owl-carousel');
    owl.owlCarousel({
        margin: 30,
        nav: true,
        loop: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 4500,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
})



/*counter.js */

$(document).ready(function () {
    $('.counter').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
});


/*animate.js */
AOS.init({
    duration: 1000,
    offset: 120,
    easing: 'ease-in-out'
})
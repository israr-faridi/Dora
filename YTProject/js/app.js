$(document).ready(function () {
    // HERO SLIDER
    $('#hero-slider').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        items: 1,
        dots: false,
        navText: ['PREV', 'NEXT'],
        smartSpeed: 1000,
        responsive: {
            0: {
                nav: false,
            },
            768: {
                nav: true,
            }
        }
    })


      // Project
      $('#project-slider').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        dots: false,
        smartSpeed: 1000,
        margin:24,
        navText: ['PREV', 'NEXT'],
        responsive: {
            0: {
                items:1,
                nav: false,
                margin:0,
                dots:true,
            },
            768: {
                items:2,
            },
            1140:{
                items:2,
                center:true
                
            }
        }
    })

    // REVIEWS
    $('.reviews-slider').owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        smartSpeed: 900,
        items: 1,
        margin: 24,
        autoplay: true,
        autoplayTimeout: 4000,
    })
})
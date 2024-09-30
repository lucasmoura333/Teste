$(document).ready(function() {
  // Certifique-se de inicializar o slick apenas uma vez
  if (!$('.slick-slider').hasClass('slick-initialized')) {
    $('.slick-slider').slick({
        dots: true,
        arrows: true,
        prevArrow: '<button class="slick-prev-custom"><img src="assets/btn-esq.png" alt="Prev"></button>',
        nextArrow: '<button class="slick-next-custom"><img src="assets/btn-dir.png" alt="Next"></button>',
        infinite: true,
        slidesToShow:1,
        slidesToScroll:1,            
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    rows: 1,
                    slidesToScroll: 1,
                    arrows: true,
                    dots: true
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    dots: true
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    arrows: false, 
                    dots: true
                }
            }
        ]
    });
  }
});

$(document).ready(function(){    
    $('.slick-slider-servicos').slick({
        slidesToShow: 6,     
        slidesToScroll: 2,          
        arrows: true,       
        prevArrow: '<button class="slick-prev-servicos"><img src="assets/btn-esq.png" alt="Prev"></button>',
        nextArrow: '<button class="slick-next-servicos"><img src="assets/btn-dir.png" alt="Next"></button>',       
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 6,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    arrows: false,                     
                }
            }
        ]
    });

    // Funções dos botões de navegação externos
    // $('.slick-prev-servicos').on('click', function() {
    //     $('.slick-slider-servicos').slick('slickPrev');
    // });

    // $('.slick-next-servicos').on('click', function() {
    //     $('.slick-slider-servicos').slick('slickNext');
    // });
});



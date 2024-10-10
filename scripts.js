$(document).ready(function() {
    // Slider Vitrine
    if (!$('.slick-slider-vitrini').hasClass('slick-initialized')) {
      $('.slick-slider-vitrini').slick({
        dots: true,
        arrows: true,
        infinite:true,
        cssEase: 'ease',
        prevArrow: '<button class="slick-prev-custom"><img src="assets/btn-esq.png" alt="Prev"></button>',
        nextArrow: '<button class="slick-next-custom"><img src="assets/btn-dir.png" alt="Next"></button>',
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              arrows: true,
              dots: true,
            }
          },
          {
            breakpoint: 992,
            settings: {
              dots: true,
            }
          },
          {
            breakpoint: 768,
            settings: {
              arrows: true,
              dots: true,
            }
          },
          {
            breakpoint: 576,
            settings: {
              arrows: false,
              dots: true,
            }
          }
        ]
      });
    }
  
    // Slider Serviços
    if (!$('.slick-slider-servicos').hasClass('slick-initialized')) {
      $('.slick-slider-servicos').slick({
        slidesToShow: 6,
        slidesToScroll: 2,
        arrows: true,
        autoplay:false,
        infinite:true,
        cssEase: 'ease',
        prevArrow: '<button class="slick-prev-servicos"><img src="assets/btn-esq.png" alt="Prev"></button>',
        nextArrow: '<button class="slick-next-servicos"><img src="assets/btn-dir.png" alt="Next"></button>',
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 6,
              slidesToScroll: 2,
              arrows: true,
            }
          },
          {
            breakpoint: 992,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                dots:true,
                arrows: false,
              }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false,
              dots:true,
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false,
              dots: true,
            }
          }
        ]
      });
    }
  
    // Slider de Notícias
    if (!$('.slickerNoticia').hasClass('slick-initialized')) {
      $('.slickerNoticia').slick({
        slidesToShow: 4,
        slidesToScroll: 2,
        infinite:true,
        arrows: true,
        autoplay: true,
        prevArrow: '<button class="slick-prev-noticias"><img src="assets/btn-esq.png" alt="Prev"></button>',
        nextArrow: '<button class="slick-next-noticias"><img src="assets/btn-dir.png" alt="Next"></button>',
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 4,
            }
          },
          {
            breakpoint: 992,
            settings: {
              dots: true,
              arrows: false,
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 768,
            settings: {
              dots: true,
              arrows: false,
              autoplay: false,
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: true,
              autoplay: false,
              arrows: false,
              
            }
          }
        ]
      });
    }
  
    // Slider Galeria
    if (!$('.slickerGaleria').hasClass('slick-initialized')) {
      $('.slickerGaleria').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,        
        centerMode: true,
        autoplay:false,
        infinite:true,
        cssEase: 'ease',
        prevArrow: '<button class="slick-prev-galeria"><img src="assets/btn-esq.png" alt="Prev"></button>',
        nextArrow: '<button class="slick-next-galeria"><img src="assets/btn-dir.png" alt="Next"></button>',
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              arrows: false,
              centerMode: true,
              dots: true,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              centerMode: false,
              arrows: false,
              dots: true,
              centerPadding: '0',
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              arrows: false,
              dots: true,
              centerMode: false,
              centerPadding: '0',
            }
          }
        ]
      });
    }
  });
  
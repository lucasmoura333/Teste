$(document).ready(function() {
  // Certifique-se de inicializar o slick apenas uma vez
  if (!$('.slick-slider').hasClass('slick-initialized')) {
    $('.slick-slider').slick({
        dots: true,
        arrows: true,
        prevArrow: '<button class="slick-prev-custom"><img src="assets/btn-esq.png" alt="Prev"></button>',
        nextArrow: '<button class="slick-next-custom"><img src="assets/btn-dir.png" alt="Next"></button>',
        infinite: true,            
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
                    arrows: false, /* Remove os botões para telas pequenas */
                    dots: true
                }
            }
        ]
    });
  }
});


$(document).ready(function() {
    // Certifique-se de inicializar o slick apenas uma vez
    if (!$('.slick-slider').hasClass('slick-initialized')) {
      $('.slick-slider').slick({
          dots: true,
          arrows: true,
          prevArrow: '<button class="slick-prev-custom"><img src="assets/btn-esq.png" alt="Prev"></button>',
          nextArrow: '<button class="slick-next-custom"><img src="assets/btn-dir.png" alt="Next"></button>',
          infinite: true,            
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
                      arrows: false, /* Remove os botões para telas pequenas */
                      dots: true
                  }
              }
          ]
      });
    }
  });
  


// $(document).ready(function() {
//     let currentIndex = 0;
//     const totalServices = $('.slickerMenor').children().length;

//     function updateSlider() {
//         $('.slickerMenor').children().hide();
//         $('.slickerMenor').children().slice(currentIndex, currentIndex + 2).show();
//     }

//     function nextSlide() {
//         currentIndex = (currentIndex + 2) % totalServices;
//         updateSlider();
//     }

//     function prevSlide() {
//         currentIndex = (currentIndex - 2 + totalServices) % totalServices;
//         updateSlider();
//     }

//     // Ações dos botões
//     $('#nextBtn').on('click', nextSlide);
//     $('#prevBtn').on('click', prevSlide);

//     // Inicia o slider
//     updateSlider();
//     setInterval(nextSlide, 3000); // Muda a cada 3 segundos
// });

// Libras


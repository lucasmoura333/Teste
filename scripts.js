$(document).ready(function(){
    $('#carouselExample').slick({
      infinite: true,         // Roda de forma infinita
      slidesToShow: 1,        // Quantidade de slides visíveis por vez
      slidesToScroll: 1,      // Quantidade de slides para rolar de uma vez
      autoplay: true,         // Auto-rolagem
      autoplaySpeed: 3000,    // Tempo entre as rolagens (em milissegundos)
      arrows: true,           // Setas para navegar
      dots: true,             // Exibe indicadores de navegação (bolinhas abaixo do slider)
      prevArrow: '<button class="slick-prev"><</button>',  // Personalização da seta anterior
      nextArrow: '<button class="slick-next">></button>'   // Personalização da seta seguinte
    });
  });


  $(document).ready(function(){
    $('.slicker-submenu').slick({
      infinite: true,          // Rolagem infinita
      slidesToShow: 4,         // Quantidade de itens visíveis por vez (ajuste conforme necessário)
      slidesToScroll: 1,       // Quantidade de itens para rolar por vez
      autoplay: false,         // Desativa o autoplay
      arrows: true,            // Setas para navegação
      responsive: [
        {
          breakpoint: 1024,    // Em telas maiores que 1024px
          settings: {
            slidesToShow: 4    // Mostra 4 itens por vez
          }
        },
        {
          breakpoint: 768,     // Em telas menores que 768px (tablets)
          settings: {
            slidesToShow: 2    // Mostra 2 itens por vez
          }
        },
        {
          breakpoint: 480,     // Em telas menores que 480px (smartphones)
          settings: {
            slidesToShow: 1    // Mostra 1 item por vez
          }
        }
      ]
    });
  });
  
  
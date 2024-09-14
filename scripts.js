 // jQuery para adicionar efeitos
 $(document).ready(function() {
    // Exemplo de efeito de fadeIn nos cards
    $('.service-card').hide().fadeIn(1000);

});


$(document).ready(function() {
    // Inicializar o carousel
    $('.carouselExampleIndicators').carousel({
        interval: 1500, // Define o intervalo para a transição automática dos slides (em milissegundos)
        ride: 'carousel' // Inicializa o carousel automaticamente
    });

    // Configurar botões de navegação personalizados
    $('.carousel-control-prev').html('<img src="assets/btn-esq.png" class="btnSlider">');
    $('.carousel-control-next').html('<img src="assets/btn-dir.png" class="btnSlider">');

    // Configurar a visibilidade dos indicadores de navegação
    $('.carousel-indicators').addClass('d-none'); // Ocultar indicadores padrão se necessário
});

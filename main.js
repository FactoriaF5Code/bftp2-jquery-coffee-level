$(document).ready(function () {


    let numeroDeCafes = 0;
    let boton = $('.button')


    function actualizarLaPagina() {
        numeroDeCafes = numeroDeCafes + 1;

        $('.progress').css('width', numeroDeCafes * 20 + "%");

        $('.image').css('background-image', `url("img/level-${numeroDeCafes}.gif")`)

        if (numeroDeCafes === 5) {
            boton.prop('disabled', true).text('Tómate una tila')
        }
    }
    
    boton.on("click", actualizarLaPagina );

});
$(document).ready(function () {
    
    let numeroDeCafes = 0;

    function actualizarLaPagina() {
        numeroDeCafes = numeroDeCafes + 1;
        
        $('.progressBar .progress').css("width", numeroDeCafes*20 + "%")

    }


    $('.button').on("click", actualizarLaPagina);









});
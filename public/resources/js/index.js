$(document).ready(function(){

    // nombreFila = $('.content_tabla');
    



// array =
    for (var i=0; i<20; i++) {

        console.log('intento ' + i);

        if(i % 2 === 0) {
            $(".content_tabla div:nth-child("+i+")").css("background", "rgb(208, 208, 208);");
        
        }else {
                $(".content_tabla div:nth-child("+i+")").css("background", "#dddd");
               
        }



    }



});
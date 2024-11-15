$(document).ready(function(){

 

    $("#enviar").click(function(){

    const nombre = $("#nombre").val();
    const apellido = $("#apellido").val();
    const edad= $("#edad").val();
    const cedula = $("#cedula").val();

    $(".men").append("nombre: "+nombre+" apellido: "+apellido+" edad: "+edad+" cedula: "+cedula+"<br> <br>");
       

    })

});
$(document).ready(function(){
    let keys = {}; // Objeto para almacenar las teclas presionadas
    let interval;
    
    $(document).keydown(function(event) {
        // Almacenar la tecla presionada en el objeto `keys`
        keys[event.key] = true;
    
        // Si no hay intervalo de movimiento en ejecución, iniciarlo
        if (!interval) {
            const div = $(".center1");
    
            interval = setInterval(function() {
                const currentPositionX = parseInt(div.css("left")) || 0;
                const currentPositionY = parseInt(div.css("top")) || 0;
    
                // Comprobar las teclas que están siendo presionadas y mover en consecuencia
                if (keys["a"] || keys["A"]) {
                    div.css("left", currentPositionX - 5 + "px"); // Mover a la izquierda

                    $(".start").remove();
                    $(".center").addClass("crecer");

                }
                if (keys["d"] || keys["D"]) {
                    div.css("left", currentPositionX + 5 + "px"); // Mover a la derecha

                    $(".start").remove();
                    $(".center").addClass("crecer");
                }
                if (keys["w"] || keys["W"]) {
                    div.css("top", currentPositionY - 5 + "px"); // Mover hacia arriba

                    $(".start").remove();
                    $(".center").addClass("crecer");
                }
                if (keys["s"] || keys["S"]) {
                    div.css("top", currentPositionY + 5 + "px"); // Mover hacia abajo

                    
                }
            }, 1.5)

            
        }

        if ($(".start").length === 0) {
            $(".center").addClass("crecer");
        }

    });

    $(".center1").click(function() {
        $(this).addClass("morir"); // Agregar la clase "morir"
        

        // Esperar un momento antes de eliminar y recargar
        setTimeout(function() {

            alert("Perdiste"); // Mostrar el mensaje de alerta
            $(".center1").remove(); // Eliminar el elemento
            location.reload(); // Recargar la página
        }, 500); // Esperar 1 segundo

    });
    
    $(document).keyup(function(event) {
        // Quitar la tecla del objeto `keys` cuando se suelta
        keys[event.key] = false;
    
        if (!keys["a"] && !keys["A"] && !keys["d"] && !keys["D"] && !keys["w"] && !keys["W"] && !keys["s"] && !keys["S"]) {
            clearInterval(interval);
            interval = null;
        }
    });

});
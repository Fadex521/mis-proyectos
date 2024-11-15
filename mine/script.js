$(document).ready(function(){

var estado = "over";

$("#cambiar").click(function(){


if(estado == "over"){

$(".overworld").replaceWith(`<h2 class="nether">nether:</h2>`);
$(".nether2").replaceWith(`<h2 class="overworld2">overworld:</h2>`);

estado = "nether";

}else if(estado == "nether"){

$(".nether").replaceWith(`<h2 class="overworld">overworld:</h2>`);
$(".overworld2").replaceWith(`<h2 class="nether2">nether:</h2>`);
estado = "over";

} 

})




$(".datos, #cambiar").on("click keyup",function(){


const inputX = $("#x").val();
const inputY = $("#y").val();
const inputZ = $("#z").val();


if(inputX == ""){

    $("#xr").text("000");

}else{

    var resultX = 0

    if(estado == "over"){

        resultX = inputX / 8;

    }else{

        resultX = inputX * 8;

    }

    
    
    $("#xr").text(""+resultX)

}

if(inputY == ""){

    $("#yr").text("000");

}else{$("#yr").text(""+inputY)}

if(inputZ == ""){

    $("#zr").text("000");

}else{

    var resultZ = 0

    if(estado == "over"){

        resultZ = inputZ / 8;

    }else{

        resultZ = inputZ * 8;

    }
    
    $("#zr").text(""+resultZ)

}
})



});
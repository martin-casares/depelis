var boton = document.querySelectorAll(".boton-tr");
var mostrarComentario = document.querySelectorAll(".no_mostrar");

boton.forEach(function(elemento, indice){
    elemento.addEventListener("click", function(){
        mostrarComentario[indice].classList.toggle("mostrar_video");
        if (mostrarComentario[indice].classList.contains("mostrar_video")) {
            elemento.innerHTML = "Ver Menos";

        } else {
            elemento.innerHTML = "Ver Trailer";
        }
    })
})
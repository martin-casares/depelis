const validarContacto = document.getElementById("validarContacto")  //Form
const formErrorContacto = document.getElementById("formErrorContacto") // Parrafo de error




validarContacto.addEventListener("submit", validarFormContacto);

function validarFormContacto(e) {
    e.preventDefault();
    const nombre = document.getElementById("contactoNombre").value;
    const email = document.getElementById("contactoEmail").value;
    const textArea = document.getElementById("contactoTextArea").value;
    
    const validarEmail = /^[\w+.-]+@\w+([.-]?\w+)*(\.\w{2,})+$/;
    const resultadoValidacionEmail = validarEmail.test(email);

    const validarNombre = /^[a-zA-Z]+$/;
    const resultadoValidacionNombre = validarNombre.test(nombre);

    
    if(nombre === "" || email === "" || textArea === ""){
        mostrarError("*Todos los campos son obligatorios*")

    }else if (!resultadoValidacionEmail){
        mostrarError("*Ingrese un Email valido*");
    }else if (!resultadoValidacionNombre){
        mostrarError("*Ingrese un nombre que no contenga signos, numeros ni caracteres especiales*");
    }else if (textArea.lenght > 300){
        mostrarError("*El texto no puede superar los 300 caracteres*")
    }else { mostrarError("*Mensaje enviado con éxito*")

    }
}

function mostrarError(mensaje) {

    formErrorContacto.textContent = mensaje;

    setTimeout(() => {
        formErrorContacto.textContent = "";
    }, 6000);
}
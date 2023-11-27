/* funcion busqueda */
const buscarButton = document.getElementById('buscarButton');

buscarButton.addEventListener('click', buscarPeli);

let peliculastorage = JSON.parse(localStorage.getItem('peliculas'));

function buscarPeli(e) {
	e.preventDefault();

	const inputBusqueda = document.getElementById('busqueda').value.toLowerCase();

	const peliculasFiltradas = peliculastorage.filter((pelicula) => pelicula.titulo.toLowerCase().includes(inputBusqueda));

	const peliculaEncontrada = JSON.stringify(peliculasFiltradas);
	if (peliculasFiltradas != '') {
		const titulos = peliculasFiltradas.map((pelicula) => pelicula.titulo).join(', ');
		const imagen = peliculasFiltradas.map((pelicula) => pelicula.img).join(', ');
		const descripcion = peliculasFiltradas.map((pelicula) => pelicula.descripcion).join(', ');
		Swal.fire({
			title: `${titulos}`,
			text: `${descripcion}`,
			imageUrl: `${imagen}`,
			imageWidth: 400,
			imageHeight: 200,
			imageAlt: 'imagen pelicula',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Ver mas!',
			cancelButtonText: 'Volver',
		}).then((result) => {
			if (result.isConfirmed) {
				window.location.href = '../pages/error4042.html';
			}
		});
	} else {
		Swal.fire({
			icon: 'error',
			title: 'Oops...',
			text: 'Pelicula no encontrada!',
		});
		return;
	}
}

const validarContacto = document.getElementById('validarContacto'); //Form
const formErrorContacto = document.getElementById('formErrorContacto'); // Parrafo de error

validarContacto.addEventListener('submit', validarFormContacto);

function validarFormContacto(e) {
    e.preventDefault();
    const nombre = document.getElementById("contactoNombre").value;
    const email = document.getElementById("contactoEmail").value;
    const textArea = document.getElementById("contactoTextArea").value;
    const enviarMail = document.getElementById("botonMailTo");
    
    const validarEmail = /^[\w+.-]+@\w+([.-]?\w+)*(\.\w{2,})+$/;
    const resultadoValidacionEmail = validarEmail.test(email);

	const validarNombre = /^[a-zA-Z]+$/;
	const resultadoValidacionNombre = validarNombre.test(nombre);

	if (nombre === '' || email === '' || textArea === '') {
		mostrarError('*Todos los campos son obligatorios*');
    }else if (!resultadoValidacionEmail){
        mostrarError("*Ingrese un Email valido*");
    }else if (!resultadoValidacionNombre){
        mostrarError("*Ingrese un nombre que no contenga signos, numeros ni caracteres especiales*");
    }else if (textArea.lenght > 300){
        mostrarError("*El texto no puede superar los 300 caracteres*")
    }else { enviarMail.setAttribute("href", `mailto:petronipablo.tec@gmail.com?subject=Nombre: ${nombre} - Email: ${email}&body= Contenido del mensaje: ${textArea}`)
        enviarMail.click();
        validarContacto.reset();
    }
}

function mostrarError(mensaje) {
	formErrorContacto.textContent = mensaje;

	setTimeout(() => {
		formErrorContacto.textContent = '';
	}, 6000);
}

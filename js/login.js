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

const validarUsuario = document.querySelector('#loginForm');
validarUsuario.addEventListener('submit', validarLogin);

let usuarios = JSON.parse(localStorage.getItem('usuarios'));

function validarLogin(e) {
	e.preventDefault();

	const email = document.querySelector('#email').value;
	const password = document.querySelector('#password').value;

	const validarEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
	const resultadoValidacion = validarEmail.test(email);

	if (!email || !password) {
		Swal.fire({
			icon: 'error',
			title: 'Oops...',
			text: 'Todos los campos son obligatorios!',
		});
		return;
	} else if (password.length < 7) {
		Swal.fire({
			icon: 'error',
			title: 'Oops...',
			text: 'La contraseña debe ser mayor a 6 caracteres!',
		});
		return;
	} else if (!resultadoValidacion) {
		Swal.fire({
			icon: 'error',
			title: 'Oops...',
			text: 'Email no valido!',
		});
		return;
	}

	const existeEmail = usuarios.find(function (usuario) {
		return usuario.email == email;
	});

	if (existeEmail !== undefined) {
		if (existeEmail.password === password) {
			if (existeEmail.email == 'admin@gmail.com') {
				window.location.href = 'admin.html';
			} else {
				window.location.href = '../index.html';
			}
		} else {
			Swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: 'Usuario o contraseña Incorrecto!',
			});
		}
	} else {
		Swal.fire({
			icon: 'error',
			title: 'Oops...',
			text: 'Usuario o contraseña Incorrecto!',
		});
	}
}

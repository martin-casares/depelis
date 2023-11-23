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
			icon: "error",
			title: "Oops...",
			text: "Todos los campos son obligatorios!",
		  });
		return;
	} else if (!resultadoValidacion) {
		Swal.fire({
			icon: "error",
			title: "Oops...",
			text: "Email no valido!",
		  });
		return;
		}else if (password.length < 7) {
			Swal.fire({
				icon: "error",
				title: "Oops...",
				text: "La contraseña debe ser mayor a 6 caracteres!",
			  });
			  return;
	}

	const existeEmail = usuarios.find(function (usuario) {
		return usuario.email == email;
	});

	if (existeEmail !== undefined) {
		if (existeEmail.password === password) {
			if (existeEmail.id == 1698276594011) {
				location.href = 'admin.html';
			} else {
				location.href = 'home.html';
			}
		}
	}
}
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
				window.location.href = '../pages/error404.html';
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

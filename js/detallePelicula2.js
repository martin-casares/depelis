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

function mostrar() {
	document.getElementById('trailer').style.display = 'block';
}

function ocultar() {
	document.getElementById('trailer').style.display = 'none';
}

function add3() {
	let content = `<div class="publicacion-realizada mb-5 mt-5">
          <div class="usuario-publico">
              <div class="avatar">
                  <img src="../img/bruno.png" alt="foto perfil">
              </div>
              <div class="contenido-publicacion">
                  <h4>Bruno</h4>
                  <ul>
                      <li>Hace 3 min</li>
                  </ul>
              </div>
              <div class="menu-comentario">
                  <i class="fas fa-pen"></i>
                  <ul class="menu">
                      
                      <li><a href="">Eliminar</a></li>
                  </ul>
              </div>
          </div>
          <p>${product.value}</p>
          
          <div class="botones-comentario">
              <button type="" class="boton-puntuar">
                  <i class="fas fa-thumbs-up" id="mg"></i>
                  45
              </button>
              
          </div>
      </div>`;

	list.innerHTML += content;
}

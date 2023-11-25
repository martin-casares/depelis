let arrayPeliculas = [
	{
		id: '1233',

		img: '../img/post-1.jpg',

		descripcion:
			'After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies',

		categoria: 'Aventuras',

		disponible: 'si',

		titulo: 'Avengers: End Game',
	},

	{
		id: '1234',

		img: '../img/post-2.jpg	',

		descripcion:
			'Two teenage cancer patients begin a life-affirming journey to visit a reclusive author in Amsterdam.',

		categoria: 'Aventuras',

		disponible: 'no',

		titulo: 'Fault in our stars',
	},

	{
		id: '1235',

		img: '../img/post-3.jpg',

		descripcion:
			'A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic',

		categoria: 'Terror',

		disponible: 'no',

		titulo: 'Titanic',
	},

	{
		id: '1236',

		img: '../img/post-4.jpg',

		descripcion:
			'A fisherman, a smuggler, and a syndicate of businessmen match wits over the possession of a priceless diamond.',

		categoria: 'Aventuras',

		disponible: 'si',

		titulo: 'Blood Diamond',
	},
];

/*let peliculas = arrayPeliculas;*/
console.log(arrayPeliculas);
let peliculas = JSON.parse(localStorage.getItem('peliculas')) || arrayPeliculas;
const tablaPeliculas = document.querySelector('.tabla-peliculas tbody');
const formPeliculas = document.querySelector('.formPeliculas');
const formEditarPeliculas = document.querySelector('#formEditarPeliculas');
const formError = document.querySelector('#formError');
formPeliculas.addEventListener('submit', crearPelicula);
formEditarPeliculas.addEventListener('submit', editarPelicula);

console.log(peliculas);

class Pelicula {
	constructor(id, titulo, categoria, img, descripcion, disponible) {
		this.id = id;
		this.titulo = titulo;
		this.categoria = categoria;
		this.img = img;
		this.descripcion = descripcion;
		this.disponible = disponible;
	}
}

function cargarTablaPeliculas() {
	tablaPeliculas.innerHTML = '';
	peliculas.map(function (pelicula) {
		let tr = document.createElement('tr');

		tr.innerHTML = `
		<td>${pelicula.id}</td>
		<td>${pelicula.titulo}</td>
		<td>${pelicula.categoria}</td>
		<td>
		<input
		class="form-check-input"
		type="checkbox"
		value=""
		id="flexCheckChecked"
	/>
		</td>
		<td>
			<button class="btn btn-secondary" onclick="mostrarEditarPelicula(${pelicula.id})"> <i class="fa fa-pen-square"></i></button>

			
			<button class="btn btn-secondary" id="like" onclick="cambiarImagen(${pelicula.id})"><i class="fa fa-star"></i></button>
			
			<button class="btn btn-secondary" onclick="borrarPelicula(${pelicula.id})"><i class="fa fa-trash"></i></button>

			</td>
		
		`;
		tablaPeliculas.appendChild(tr);
	});
}
cargarTablaPeliculas();

function crearPelicula(e) {
	e.preventDefault();

	const id = Date.now();
	const titulo = document.querySelector('#titulo').value;
	const categoria = document.querySelector('#categoria').value;
	const img = document.querySelector('#img').value;
	const descripcion = document.querySelector('#descripcion').value;

	/* falta validar */
	if (titulo === '' || !categoria || !img || !descripcion) {
		mostrarError('Todos los campos son requeridos');
	} else if (titulo < 3) {
		mostrarError('El titulo debe tener mas de 3 caracteres');
	} else {
		Swal.fire({
			icon: 'error',
			title: 'Pelicula guardada',
			text: 'Pelicula guradada exitosamente!',
		});
	}
	const newPelicula = new Pelicula(id, titulo, categoria, img, descripcion);

	peliculas.push(newPelicula);

	localStorage.setItem('peliculas', JSON.stringify(peliculas));

	formPeliculas.reset();

	cargarTablaPeliculas();
}

function mostrarError(mensaje) {
	formError.textContent = mensaje;
	formError.classList.add(
		'text-white',
		'bg-danger',
		'w-25',
		'fs-3',
		'm-3',
		'p-3',
		'text-center'
	);

	setTimeout(() => {
		formError.textContent = '';
		formError.classList.remove(
			'text-white',
			'bg-danger',
			'w-25',
			'fs-3',
			'm-3',
			'p-3',
			'text-center'
		);
	}, 5000);
}

function mostrarEditarPelicula(id) {
	/* console.log(id); */
	const pelicula = peliculas.find(function (p) {
		return p.id == id;
	});

	document.querySelector('#editarTitulo').value = pelicula.titulo;
	document.querySelector('#editarCategoria').value = pelicula.categoria;
	document.querySelector('#editarImagen').value = pelicula.img;
	document.querySelector('#editarDescripcion').value = pelicula.descripcion;
	formEditarPeliculas.setAttribute('data-id', id);

	document.querySelector('#editarModal').style.display = 'block';
}

function editarPelicula(e) {
	e.preventDefault();
	const tituloEditar = document.querySelector('#editarTitulo').value;
	const categoriaEditar = document.querySelector('#editarCategoria').value;
	const imagenEditar = document.querySelector('#editarImagen').value;
	const descripcionEditar = document.querySelector('#editarDescripcion').value;

	/* validaciones  */

	const id = formEditarPeliculas.getAttribute('data-id');
	const peliculaIndex = peliculas.findIndex(function (pelicula) {
		return pelicula.id == parseInt(id);
	});

	peliculas[peliculaIndex].titulo = tituloEditar;
	peliculas[peliculaIndex].categoria = categoriaEditar;
	peliculas[peliculaIndex].imagen = imagenEditar;
	peliculas[peliculaIndex].descripcion = descripcionEditar;

	document.querySelector('#editarModal').style.display = 'none';

	localStorage.setItem('peliculas', JSON.stringify(peliculas));

	cargarTablaPeliculas();
}

function borrarPelicula(id) {
	console.log('id de la pelicula', id);
	peliculas = peliculas.filter(function (pelicula) {
		return pelicula.id !== id;
	});

	localStorage.setItem('peliculas', JSON.stringify(peliculas));

	cargarTablaPeliculas();
}

/* boton cerrar del modal */
document.getElementById('btn-cerrar').addEventListener('click', () => {
	console.log('cerrar');
	document.querySelector('#editarModal').style.display = 'none';
});

function cambiarImagen(id) {
	const pelicula = peliculas.find(function (p) {
		return p.id == id;
	});

	document.getElementById('like').classList.remove('text-secondary');
	document.getElementById('like').classList.add('text-warning');

	/* cambiar imagen de cabecera */
	const header = (document.querySelector('header').style.backgroundImage =
		'url(${pelicula.img})');
	console.log(header);

	/* header.classList.add(''); */
}

/* document.getElementById('like').onclick = function () {
	cambiarImagen();
}; */

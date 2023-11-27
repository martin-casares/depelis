const estrenos = [
	{
		img: '../img/p-1.png',
		fecha: 2012,
		descripcion:
			'After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies.',
		directores: ['Anthony Russo', 'Joe Russo'],
		categoria: ['Action', 'Adventure', 'Drama'],

		rating: 8.4,

		titulo: 'Avengers: End Game',

		enlace: './pages/detallePelicula.html',
	},
	{
		img: '../img/p-2.jpg',
		fecha: 2014,
		descripcion:
			'Wade Wilson, tras ser sometido a un cruel experimento científico, adquiere poderes especiales que le convierten en Deadpool. Armado con sus nuevas habilidades y un retorcido sentido del humor tratará de dar caza al hombre que casi destruye su vida.',
		directores: ['George Boone'],
		categoria: ['Drama', 'Acción'],

		rating: 7.7,

		titulo: 'Deadpool',

		enlace: './pages/detallePelicula2.html',
	},
	{
		img: '../img/p-3.png',
		fecha: 1997,
		descripcion: 'A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic',
		directores: ['James Cameron'],
		categoria: ['Drama', 'Romance'],

		rating: 7.8,

		titulo: 'Titanic',

		enlace: './pages/detallePelicula3.html',
	},
	{
		img: '../img/p-4.png',
		fecha: 2006,
		descripcion: 'A fisherman, a smuggler, and a syndicate of businessmen match wits over the possession of a priceless diamond.',
		directores: ['Edward Zwick'],
		categoria: ['Drama', 'Adventure', 'Thriller'],

		rating: 8,

		titulo: 'Blood Diamond',

		enlace: './pages/Error4042.html',
	},
	{
		img: '../img/p-5.png',
		fecha: 2018,
		descripcion: 'A faithful wife, tired of standing by her devious husband, is enraged when it becomes clear she has been betrayed.',
		directoros: ['Tyler Perry'],
		genres: ['Thriller'],

		rating: 5.8,

		titulo: 'Acrimony',

		enlace: './pages/Error4042.html',
	},
	{
		img: '../img/p-6.jpg',
		fecha: 2010,
		descripcion: 'As Harvard student Mark Zuckerberg creates the social networking site that would become known as Facebook.',
		directores: ['David Fincher'],
		categoria: ['Biography', 'Drama'],

		rating: 7.7,

		titulo: 'The Social Network',

		enlace: './pages/Error4042.html',
	},
];

let arrayPeliculas = [
	{
		id: '1233',
		img: '../img/post-1.jpg',
		descripcion: 'After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies',
		categoria: 'Aventuras',
		disponible: 'si',
		titulo: 'Avengers: End Game',
	},

	{
		id: '1234',
		img: '../img/post-2.jpg	',
		descripcion: 'Two teenage cancer patients begin a life-affirming journey to visit a reclusive author in Amsterdam.',
		categoria: 'Aventuras',
		disponible: 'no',
		titulo: 'Fault in our stars',
	},

	{
		id: '1235',
		img: 'https://hips.hearstapps.com/hmg-prod/images/the-hills-have-eyes-608777333-large-6530e777c3e68.jpg?crop=0.995xw:0.956xh;0,0.0436xh&resize=980:*',
		descripcion: 'Al adentrarse en una zona desértica de acceso restringido donde el Gobierno está experimentando,a auténtica pesadilla.',
		categoria: 'Terror',
		disponible: 'si',
		titulo: 'The hills have eyes',
	},

	{
		id: '1236',
		img: '../img/post-4.jpg',
		descripcion: 'A fisherman, a smuggler, and a syndicate of businessmen match wits over the possession of a priceless diamond.',
		categoria: 'Aventuras',
		disponible: 'si',
		titulo: 'Blood Diamond',
	},
	{
		id: '1237',
		img: 'https://hips.hearstapps.com/hmg-prod/images/martyrs-833344715-large-6530e80201999.jpg?crop=0.9522012578616352xw:1xh;center,top&resize=980:*',
		descripcion: 'Mártires cuenta la historia de Lucie, una niña desaparecida en Francia en 1969 que es  a su estado, es incapaz de contar nada de lo sucedido..',
		categoria: 'Terror',
		disponible: 'si',
		titulo: 'Martires',
	},

	{
		id: '1238',
		img: 'https://hips.hearstapps.com/hmg-prod/images/28-days-later-469569758-large-6530e6afa5791.jpg?crop=0.9916666666666667xw:1xh;center,top&resize=980:*',
		descripcion: 'Tras la propagación de un virus letal que acaba con la vida de miles de personas en Gran Bretaña, unos  Londres.',
		disponible: 'si',
		categoria: 'Terror',
		titulo: '28 dias despues',
	},
	{
		id: '1239',
		img: 'https://hips.hearstapps.com/hmg-prod/images/the-descent-396561570-large-6530e57274f5a.jpg?crop=0.9434464404524285xw:1xh;center,top&resize=980:*',
		descripcion: 'Cuando un grupo de seis amigas se reúne para emprender una expedición espeleológica, jamás imaginará que su vida',
		disponible: 'si',
		categoria: 'Terror',
		titulo: 'The descent',
	},

	{
		id: '1240',
		img: 'https://www.pequeocio.com/wp-content/uploads/2020/01/jungle-cruise-pelicula-2020-385x550.jpg.webp',
		descripcion: 'Frank es un capitán de barco que lleva por la selva a la científica Lily Houghton y a su hermano curativos.',
		disponible: 'si',
		categoria: 'Aventuras',
		titulo: 'The Jungle Cruise',
	},
	{
		id: '1241',
		img: 'https://www.pequeocio.com/wp-content/uploads/2019/12/soul-cartel-pelicula-disney-pixar-372x550.jpeg.webp',
		descripcion: 'Soul es la nueva película de Pixar, que nos narra la historia de Joe Gardnet, un maestro de música de secundaria z.',
		disponible: 'si',
		categoria: 'Aventuras',
		titulo: 'Soul',
	},
	{
		id: '1242',
		img: 'https://cdn.atomix.vg/wp-content/uploads/2015/05/atomix_movies_mad_max_fury_road_furia_en_el_camino_pelicula_post_apocaliptica_george_miller_tom_hardy_charlize_teron_warner_bros_recomendacion_cine_ver_cartelera.png',
		descripcion: 'Soul es la nueva película de Pixar, que nos narra la historia de Joe Gardnet, un maestro de música de secundaria z.',
		disponible: 'si',
		categoria: 'Accion',
		titulo: 'Mad Max',
	},
	{
		id: '1243',
		img: 'https://es.web.img3.acsta.net/c_310_420/pictures/20/01/09/15/10/0234685.jpg',
		descripcion: 'Soul es la nueva película de Pixar, que nos narra la historia de Joe Gardnet, un maestro de música de secundaria z.',
		disponible: 'si',
		categoria: 'Accion',
		titulo: '1917',
	},
	{
		id: '1244',
		img: 'https://img.asmedia.epimg.net/resizer/DFTtArUNaW419i0UdsN_OkIvDmU=/736x0/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/ZUZCKWWLVZN37ACDYH5SJJX4TM.jpg',
		descripcion: 'Soul es la nueva película de Pixar, que nos narra la historia de Joe Gardnet, un maestro de música de secundaria z.',
		disponible: 'si',
		categoria: 'Accion',
		titulo: '1917',
	},
];

let arrayPeliculas = [
	{
		id: '1233',
		img: '../img/post-1.jpg',
		descripcion: 'After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies',
		categoria: 'Aventuras',
		disponible: 'si',
		titulo: 'Avengers: End Game',
	},

	{
		id: '1234',
		img: '../img/post-2.jpg	',
		descripcion: 'Two teenage cancer patients begin a life-affirming journey to visit a reclusive author in Amsterdam.',
		categoria: 'Aventuras',
		disponible: 'no',
		titulo: 'Fault in our stars',
	},

	{
		id: '1235',
		img: 'https://hips.hearstapps.com/hmg-prod/images/the-hills-have-eyes-608777333-large-6530e777c3e68.jpg?crop=0.995xw:0.956xh;0,0.0436xh&resize=980:*',
		descripcion: 'Al adentrarse en una zona desértica de acceso restringido donde el Gobierno está experimentando,a auténtica pesadilla.',
		categoria: 'Terror',
		disponible: 'si',
		titulo: 'The hills have eyes',
	},

	{
		id: '1236',
		img: '../img/post-4.jpg',
		descripcion: 'A fisherman, a smuggler, and a syndicate of businessmen match wits over the possession of a priceless diamond.',
		categoria: 'Aventuras',
		disponible: 'si',
		titulo: 'Blood Diamond',
	},
	{
		id: '1237',
		img: 'https://hips.hearstapps.com/hmg-prod/images/martyrs-833344715-large-6530e80201999.jpg?crop=0.9522012578616352xw:1xh;center,top&resize=980:*',
		descripcion: 'Mártires cuenta la historia de Lucie, una niña desaparecida en Francia en 1969 que es  a su estado, es incapaz de contar nada de lo sucedido..',
		categoria: 'Terror',
		disponible: 'si',
		titulo: 'Martires',
	},

	{
		id: '1238',
		img: 'https://hips.hearstapps.com/hmg-prod/images/28-days-later-469569758-large-6530e6afa5791.jpg?crop=0.9916666666666667xw:1xh;center,top&resize=980:*',
		descripcion: 'Tras la propagación de un virus letal que acaba con la vida de miles de personas en Gran Bretaña, unos  Londres.',
		disponible: 'si',
		categoria: 'Terror',
		titulo: '28 dias despues',
	},
	{
		id: '1239',
		img: 'https://hips.hearstapps.com/hmg-prod/images/the-descent-396561570-large-6530e57274f5a.jpg?crop=0.9434464404524285xw:1xh;center,top&resize=980:*',
		descripcion: 'Cuando un grupo de seis amigas se reúne para emprender una expedición espeleológica, jamás imaginará que su vida',
		disponible: 'si',
		categoria: 'Terror',
		titulo: 'The descent',
	},

	{
		id: '1240',
		img: 'https://www.pequeocio.com/wp-content/uploads/2020/01/jungle-cruise-pelicula-2020-385x550.jpg.webp',
		descripcion: 'Frank es un capitán de barco que lleva por la selva a la científica Lily Houghton y a su hermano curativos.',
		disponible: 'si',
		categoria: 'Aventuras',
		titulo: 'The Jungle Cruise',
	},
	{
		id: '1241',
		img: 'https://www.pequeocio.com/wp-content/uploads/2019/12/soul-cartel-pelicula-disney-pixar-372x550.jpeg.webp',
		descripcion: 'Soul es la nueva película de Pixar, que nos narra la historia de Joe Gardnet, un maestro de música de secundaria z.',
		disponible: 'si',
		categoria: 'Aventuras',
		titulo: 'Soul',
	},
	{
		id: '1242',
		img: 'https://cdn.atomix.vg/wp-content/uploads/2015/05/atomix_movies_mad_max_fury_road_furia_en_el_camino_pelicula_post_apocaliptica_george_miller_tom_hardy_charlize_teron_warner_bros_recomendacion_cine_ver_cartelera.png',
		descripcion: 'Soul es la nueva película de Pixar, que nos narra la historia de Joe Gardnet, un maestro de música de secundaria z.',
		disponible: 'si',
		categoria: 'Accion',
		titulo: 'Mad Max',
	},
	{
		id: '1243',
		img: 'https://es.web.img3.acsta.net/c_310_420/pictures/20/01/09/15/10/0234685.jpg',
		descripcion: 'Soul es la nueva película de Pixar, que nos narra la historia de Joe Gardnet, un maestro de música de secundaria z.',
		disponible: 'si',
		categoria: 'Accion',
		titulo: '1917',
	},
	{
		id: '1244',
		img: 'https://img.asmedia.epimg.net/resizer/DFTtArUNaW419i0UdsN_OkIvDmU=/736x0/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/ZUZCKWWLVZN37ACDYH5SJJX4TM.jpg',
		descripcion: 'Soul es la nueva película de Pixar, que nos narra la historia de Joe Gardnet, un maestro de música de secundaria z.',
		disponible: 'si',
		categoria: 'Accion',
		titulo: '1917',
	},
];

const sliderEstrenos = document.querySelector('.swiper-wrapper');
const sliderContainer = document.getElementById('slider-container');
/* const slider = document.getElementById('slider'); */
const buttonLeft = document.getElementById('button-left');
const buttonRight = document.getElementById('button-right');
const cardContainer = document.querySelector('.card-container');
const slider1 = document.querySelector('.slider1');
const slider2 = document.querySelector('.slider2');
const slider3 = document.querySelector('.slider3');

/* /peliculas = JSON.parse(localStorage.getItem('peliculas'));*/

function obtenerDatos() {
	const storedData = localStorage.getItem('peliculas');
	if (storedData) {
		return JSON.parse(storedData);
	} else {
		// Si el localStorage está vacío, guarda los datos del array predeterminado en el localStorage
		const defaultData = arrayPeliculas;
		guardarEnLocalStorage(defaultData);
		return defaultData;
	}
}

let peliculas = obtenerDatos();

function guardarEnLocalStorage(data) {
	localStorage.setItem('peliculas', JSON.stringify(data));
}

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
				window.location.href = './pages/error404.html';
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

/* carga el slider principal */
function cargarPeliculas(peliculas) {
	peliculas.map((pelicula) => {
		const div = document.createElement('div');
		const div2 = document.createElement('div');
		const div3 = document.createElement('div');

		div.classList.add('swiper-slide');
		div2.classList.add('main-slider-box');
		div2.innerHTML = `
			<a href="${pelicula.enlace}" class="main-slider-overlay">
				<i class="fas fa-play"></i>
			</a>
		`;
		div3.classList.add('main-slider-img');
		div3.innerHTML = `
			<a href="../pages/detallePelicula.html"> <img class="img-fluid" src="${pelicula.img}" alt="${pelicula.titulo}"/> </a>
		
		
			<div class="main-slider-text">
		
			<span class="quality">Full HD</span>
	
			<div class="bottom-text">
	
				<div class="movie-name">
					<span>${pelicula.fecha}</span>
					<strong>${pelicula.titulo}</strong>
				</div>
	
				<div class="category-rating">

					<div class="category">
					 	<a href="#">Terror</a>,<a href="#">Misterio</a>,<a href="#"
							>Thiller</a
						> 
						
					</div>
		
					<div class="rating">
						${pelicula.rating} <img src="img/IMDb-icon.png" alt="imdb" />
					</div>
				</div>
			</div>
		</div>
			  
        `;

		div2.appendChild(div3);
		div.appendChild(div2);
		sliderEstrenos.appendChild(div);
	});
}

cargarPeliculas(estrenos);

function cargarSliders(peliculas) {
	const categoriasUnicas = [...new Set(peliculas.map((p) => p.categoria))];

	categoriasUnicas.forEach((categoria) => {
		const peliculasDeCategoria = peliculas.filter((p) => p.categoria === categoria);

		peliculasDeCategoria.forEach((pelicula) => {
			const card = document.createElement('div');
			card.classList.add('card');
			card.innerHTML = `
      <img src="${pelicula.img}" alt="" class="card-img img-fluid" />
      <div class="card-body">
        <h2 class="name">${pelicula.titulo}</h2>
        <h6 class="des">${pelicula.descripcion}</h6>
        <a href="../pages/detallePelicula.html" class="watchlist-btn btn text-center">
          <i class="fa fa-play mx-1"></i>
           Ver ahora 
        </a>
      </div>	 
    `;

			// Dependiendo de la categoría, agrega el card al slider correspondiente
			if (categoria === 'Aventuras') {
				slider1.appendChild(card);
			} else if (categoria === 'Terror') {
				slider2.appendChild(card);
			} else if (categoria === 'Accion') {
				slider3.appendChild(card);
			}
			// Puedes agregar más condiciones para otras categorías si es necesario
		});
	});
}

cargarSliders(peliculas);

function scrollIzquierda() {
	cardContainer.scrollLeft -= 235;
}

function scrollDerecha() {
	cardContainer.scrollLeft += 235;
}

function scrollIzquierda2() {
	slider2.scrollLeft -= 235;
}

function scrollDerecha2() {
	slider2.scrollLeft += 235;
}

function scrollIzquierda3() {
	slider3.scrollLeft -= 235;
}

function scrollDerecha3() {
	slider3.scrollLeft += 235;
}

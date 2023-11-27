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
		descripcion:
			'A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic',
		directores: ['James Cameron'],
		categoria: ['Drama', 'Romance'],

		rating: 7.8,

		titulo: 'Titanic',

		enlace: './pages/detallePelicula3.html',
	},
	{
		img: '../img/p-4.png',
		fecha: 2006,
		descripcion:
			'A fisherman, a smuggler, and a syndicate of businessmen match wits over the possession of a priceless diamond.',
		directores: ['Edward Zwick'],
		categoria: ['Drama', 'Adventure', 'Thriller'],

		rating: 8,

		titulo: 'Blood Diamond',

		enlace: './pages/Error4042.html',
	},
	{
		img: '../img/p-5.png',
		fecha: 2018,
		descripcion:
			'A faithful wife, tired of standing by her devious husband, is enraged when it becomes clear she has been betrayed.',
		directoros: ['Tyler Perry'],
		genres: ['Thriller'],

		rating: 5.8,

		titulo: 'Acrimony',

		enlace: './pages/Error4042.html',
	},
	{
		img: '../img/p-6.jpg',
		fecha: 2010,
		descripcion:
			'As Harvard student Mark Zuckerberg creates the social networking site that would become known as Facebook.',
		directores: ['David Fincher'],
		categoria: ['Biography', 'Drama'],

		rating: 7.7,

		titulo: 'The Social Network',

		enlace: './pages/Error4042.html',
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

peliculas = JSON.parse(localStorage.getItem('peliculas'));

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

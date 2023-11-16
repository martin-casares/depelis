/* import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'; */

const estrenos = [
	{
		img: '../img/p-1.jpg',
		fecha: 2017,
		descripcion:
			'After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies.',
		directores: ['Anthony Russo', 'Joe Russo'],
		categoria: ['Action', 'Adventure', 'Drama'],

		rating: 8.4,

		titulo: 'Avengers: End Game',
	},
	{
		img: '../img/p-2.jpg',
		fecha: 2014,
		descripcion:
			'Two teenage cancer patients begin a life-affirming journey to visit a reclusive author in Amsterdam.',
		directores: ['George Boone'],
		categoria: ['Drama', 'Romance'],

		rating: 7.7,

		titulo: 'Fault in our stars',
	},
	{
		img: '../img/p-3.jpg',
		fecha: 1997,
		descripcion:
			'A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic',
		directores: ['James Cameron'],
		categoria: ['Drama', 'Romance'],

		rating: 7.8,

		titulo: 'Titanic',
	},
	{
		img: '../img/p-4.jpg',
		fecha: 2006,
		descripcion:
			'A fisherman, a smuggler, and a syndicate of businessmen match wits over the possession of a priceless diamond.',
		directores: ['Edward Zwick'],
		categoria: ['Drama', 'Adventure', 'Thriller'],

		rating: 8,

		titulo: 'Blood Diamond',
	},
	{
		img: '../img/p-5.jpg',
		fecha: 2018,
		descripcion:
			'A faithful wife, tired of standing by her devious husband, is enraged when it becomes clear she has been betrayed.',
		directoros: ['Tyler Perry'],
		genres: ['Thriller'],

		rating: 5.8,

		titulo: 'Acrimony',
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
	},
];

const peliculas = [
	{
		img: '../img/post-1.jpg',
		fecha: 2017,
		descripcion:
			'After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies',
		directores: ['Anthony Russo', 'Joe Russo'],
		categoria: ['Action', 'Adventure', 'Drama'],

		rating: 8.4,

		titulo: 'Avengers: End Game',
	},
	{
		img: '../img/post-2.jpg	',
		fecha: 2014,
		descripcion:
			'Two teenage cancer patients begin a life-affirming journey to visit a reclusive author in Amsterdam.',
		directores: ['George Boone'],
		categoria: ['Drama', 'Romance'],

		rating: 7.7,

		titulo: 'Fault in our stars',
	},
	{
		img: '../img/post-3.jpg',
		fecha: 1997,
		descripcion:
			'A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic',
		directores: ['James Cameron'],
		categoria: ['Drama', 'Romance'],

		rating: 7.8,

		titulo: 'Titanic',
	},
	{
		img: '../img/post-4.jpg',
		fecha: 2006,
		descripcion:
			'A fisherman, a smuggler, and a syndicate of businessmen match wits over the possession of a priceless diamond.',
		directores: ['Edward Zwick'],
		categoria: ['Drama', 'Adventure', 'Thriller'],

		rating: 8,

		titulo: 'Blood Diamond',
	},
	{
		img: '../img/post-5.jpg',
		fecha: 2018,
		descripcion:
			'A faithful wife, tired of standing by her devious husband, is enraged when it becomes clear she has been betrayed.',
		directoros: ['Tyler Perry'],
		genres: ['Thriller'],

		rating: 5.8,

		titulo: 'Acrimony',
	},
	{
		img: '../img/post-6.jpg',
		fecha: 2010,
		descripcion:
			'As Harvard student Mark Zuckerberg creates the social networking site that would become known as Facebook.',
		directores: ['David Fincher'],
		categoria: ['Biography', 'Drama'],

		rating: 7.7,

		titulo: 'The Social Network',
	},
	{
		img: '../img/post-6.jpg',
		fecha: 2010,
		descripcion:
			'As Harvard student Mark Zuckerberg creates the social networking site that would become known as Facebook.',
		directores: ['David Fincher'],
		categoria: ['Biography', 'Drama'],

		rating: 7.7,

		titulo: 'The Social Network',
	},
	{
		img: '../img/post-6.jpg',
		fecha: 2010,
		descripcion:
			'As Harvard student Mark Zuckerberg creates the social networking site that would become known as Facebook.',
		directores: ['David Fincher'],
		categoria: ['Biography', 'Drama'],

		rating: 7.7,

		titulo: 'The Social Network',
	},
	{
		img: '../img/post-6.jpg',
		fecha: 2010,
		descripcion:
			'As Harvard student Mark Zuckerberg creates the social networking site that would become known as Facebook.',
		directores: ['David Fincher'],
		categoria: ['Biography', 'Drama'],

		rating: 7.7,

		titulo: 'The Social Network',
	},
];
const sliderEstrenos = document.querySelector('.swiper-wrapper');
const sliderContainer = document.getElementById('slider-container');
const slider = document.getElementById('slider');
const buttonLeft = document.getElementById('button-left');
const buttonRight = document.getElementById('button-right');
const cardContainer = document.querySelector('.card-container');
const slider2 = document.querySelector('.slider2');
const slider3 = document.querySelector('.slider3');

/* carga el slider principal */
function cargarPeliculas(peliculas) {
	peliculas.map((pelicula) => {
		const div = document.createElement('div');
		const div2 = document.createElement('div');
		const div3 = document.createElement('div');

		div.classList.add('swiper-slide');
		div2.classList.add('main-slider-box');
		div2.innerHTML = `
			<a href="#" class="main-slider-overlay">
				<i class="fas fa-play"></i>
			</a>
		`;
		div3.classList.add('main-slider-img');
		div3.innerHTML = `
      <img class="img-fluid" src="${pelicula.img}" alt="${pelicula.titulo}"/>   
			<div class="main-slider-text">
		
			<span class="quality">Full HD</span>
	
			<div class="bottom-text">
	
				<div class="movie-name">
					<span>${pelicula.fecha}</span>
					<strong>${pelicula.titulo}</strong>
				</div>
	
				<div class="category-rating">

					<div class="category">
					 	<a href="#">Torror</a>,<a href="#">Misterio</a>,<a href="#"
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

// cargar slider secundarios
function cargarSliders(peliculas) {
	let cardContainers = document.querySelectorAll('.card-container');

	cardContainers.forEach((item, index) => {
		peliculas.map((movie) => {
			const card = document.createElement('div');

			card.classList.add('card');

			card.innerHTML = `
						<img src="${movie.img}" alt="" class="card-img img-fluid" />
						<div class="card-body">
						<h2 class="name">${movie.titulo}</h2>
						<h6 class="des">
							${movie.descripcion}
						</h6>
						<button class="watchlist-btn text-center">
						<i class="fa fa-play mx-1"></i>
						Ver ahora</button>
					</div>	 
		
						`;
			item.appendChild(card);
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

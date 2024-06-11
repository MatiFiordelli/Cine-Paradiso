const getGenre = (id) => {
	if (id === 28) return "Acción";
	if (id === 12) return "Aventura";
	if (id === 16) return "Animaciòn";
	if (id === 35) return "Comedia";
	if (id === 80) return "Crimen";
	if (id === 99) return "Documental";
	if (id === 18) return "Drama";
	if (id === 10751) return "Familiar";
	if (id === 14) return "Fantasia";
	if (id === 36) return "Histórica";
	if (id === 27) return "Horror";
	if (id === 10402) return "Musical";
	if (id === 9648) return "Misterio";
	if (id === 10749) return "Romance";
	if (id === 878) return "Ciencia Ficción";
	if (id === 10770) return "TV Movie";
	if (id === 53) return "Thriller";
	if (id === 10752) return "Bélica";
	if (id === 37) return "Western";
	return id;
};
export default getGenre
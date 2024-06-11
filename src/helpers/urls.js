const language = "es-ES";
const apiKey = "4d1a073d6e646d93ce0400ffa3b8d13e";
const endPointBg = "https://api.themoviedb.org/3";

const urls = {
    imgs: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/',
    urlMovies: (id)=>`${endPointBg}/movie/${id}?api_key=${apiKey}&language=${language}&include_adult=false&append_to_response=release_dates`,
	urlPeople: (id)=>`${endPointBg}/movie/${id}/credits?api_key=${apiKey}&language=${language}&page=1&include_adult=false&region=AR`,
}
export default urls

//https://image.tmdb.org/t/p/w1066_and_h600_bestv2
//https://image.tmdb.org/t/p/w600_and_h900_bestv2
//https://image.tmdb.org/t/p/w300_and_h450_bestv2
//https://image.tmdb.org/t/p/w94_and_h141_bestv2
//https://image.tmdb.org/t/p/w1280/
//https://image.tmdb.org/t/p/w780
//https://image.tmdb.org/t/p/w500
//https://image.tmdb.org/t/p/w300
//https://image.tmdb.org/t/p/w185/

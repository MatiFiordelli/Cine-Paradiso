import React, { useEffect, useState } from "react";
import Card from "./Card";
import OverlaySpinner from '../OverlaySpinner'
//import pathroutes from "../../../helpers/pathroutes";

//const language = "es-ES";
//const apiKey = "4d1a073d6e646d93ce0400ffa3b8d13e";
//const endPointBg = "https://api.themoviedb.org/3";
//https://image.tmdb.org/t/p/w1066_and_h600_bestv2
//https://image.tmdb.org/t/p/w600_and_h900_bestv2
//https://image.tmdb.org/t/p/w300_and_h450_bestv2
//https://image.tmdb.org/t/p/w94_and_h141_bestv2
//https://image.tmdb.org/t/p/w1280/
//https://image.tmdb.org/t/p/w780
//https://image.tmdb.org/t/p/w500
//https://image.tmdb.org/t/p/w300
//https://image.tmdb.org/t/p/w185/
/* const urlImg = "https://image.tmdb.org/t/p/w600_and_h900_bestv2/";
const urlArray = [
	`${endPointBg}/movie/now_playing?api_key=${apiKey}&language=${language}&page=1&include_adult=false&region=AR`,
	`${endPointBg}/movie/upcoming?api_key=${apiKey}&language=${language}&page=1&include_adult=false&region=AR`,
]; 

const nowPlayingUrl = urlArray[0];*/

export default function CardsGroup() {
	const [nowPlaying, setNowPlaying] = useState(null);

	useEffect(() => {
		const nowPlayingUrl2 = 'https://api-cine-paradiso.vercel.app/get-movie-billboard'

		fetch(nowPlayingUrl2)
			.then((res) => res.json())
			.then((data) => {
				setNowPlaying(data[0].results);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<section className="cards-group d-flex flex-wrap gap-4 justify-content-center">
			{nowPlaying 
				? nowPlaying.map((e, i) => (
					<div key={i} className="col-5 col-sm-3 col-lg-2 mt-4">
						<Card data={e} i={i} />
					</div>
				))
				: <OverlaySpinner />
			}
		</section>
	);
}

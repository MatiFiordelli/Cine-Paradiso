import React, { useEffect, useState } from "react";
import TopContent from "./TopContent";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";
import { MovieDetailsCtx, PeopleDetailsCtx } from "../../contexts";
import { useParams } from "react-router-dom";
import FadeEffect from "../Resources/FadeEffect";
import "./index.css";
import urls from "../../helpers/urls";

export default function MovieDetailsComponent() {
	const { id } = useParams();
	const [movieDetails, setMovieDetails] = useState(null);
	const [peopleDetails, setPeopleDetails] = useState(null);
	//const id = "748783";

	/* const language = "es-ES";
	const apiKey = "4d1a073d6e646d93ce0400ffa3b8d13e";
	const endPointBg = "https://api.themoviedb.org/3"; */

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		if (id) {
			/* const urlMovies = `${endPointBg}/movie/${id}?api_key=${apiKey}&language=${language}&include_adult=false&append_to_response=release_dates`;
			const urlPeople = `${endPointBg}/movie/${id}/credits?api_key=${apiKey}&language=${language}&page=1&include_adult=false&region=AR`; */
			const urlMovies = urls.urlMovies(id)
			const urlPeople = urls.urlPeople(id)

			fetch(urlMovies)
				.then((res) => res.json())
				.then((data) => {
					setMovieDetails(data);
				});

			fetch(urlPeople)
				.then((res) => res.json())
				.then((data) => {
					setPeopleDetails(data);
				});
		}
	}, [id]);

	return (
		<>
			{movieDetails && (
				<FadeEffect>
					<PeopleDetailsCtx.Provider value={{ peopleDetails }}>
						<MovieDetailsCtx.Provider value={{ movieDetails }}>
							<section className="position-relative">
								<TopContent />
								<div className="bottom-container d-flex">
									<LeftContent />
									<RightContent id={id} />
								</div>
							</section>
						</MovieDetailsCtx.Provider>
					</PeopleDetailsCtx.Provider>
				</FadeEffect>
			)}
		</>
	);
}

import React, { useContext } from "react";
import Menu from "../Menu";
import { MovieDetailsCtx } from "../../../../contexts";
import './index.css'

export default function Poster({ posterTopPx }) {
	const { movieDetails } = useContext(MovieDetailsCtx);
	const urlImg = "https://image.tmdb.org/t/p/w1280";
    const fullUrl =  urlImg + movieDetails.poster_path

	return (
		<section className="d-flex flex-column w-100 min-vh-100 ps-2">
			<div
				className="poster-details d-block position-relative rounded-1 "
				style={{
					backgroundImage: `url(${fullUrl})`,
					top: `-${posterTopPx}px`,
				}}
			>
				
			</div>
			<Menu  posterTopPx={posterTopPx}/>
		</section>
	);
}

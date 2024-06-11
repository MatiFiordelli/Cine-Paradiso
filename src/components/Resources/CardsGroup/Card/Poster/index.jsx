import React from "react";
import Tilt from "react-parallax-tilt";
import urls from '../../../../../helpers/urls'
import './index.css'
import { useNavigate } from "react-router-dom";
import pathroutes from '../../../../../helpers/pathroutes.js'

export default function Poster({ title, poster, id }) {
    const imgUrl = urls.imgs + poster
	const navigate = useNavigate()
	const url = pathroutes.details + id
	    
	return (
		<Tilt
			tiltEnable={true}
			tiltReverse={true}
			glareEnable={true}
			transitionSpeed={10000}
			gyroscope={true}
		>
			<img
				className="card-image card-img-top rounded"
				style={!poster ? {filter: 'brightness(0)'} : {}}
				src={poster ? imgUrl : "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/fTJCFWfHw7lsgOhcyPK1BUTbYNC.jpg"}
				id={`${poster}`}
				alt={`${title}`}
				title={poster ? `${title}` : 'Imagen no disponible'}
				onMouseOver={(e) => (e.target.style.scale = 1.05)}
				onMouseOut={(e) => (e.target.style.scale = 1)}
				onClick={() => navigate(url)}
			/>
		</Tilt>
	);
}

import React, { useContext } from "react";
import { MovieDetailsCtx } from "../../../../contexts/";
import './index.css'

export default function BackDropSlider() {
	const { movieDetails } = useContext(MovieDetailsCtx);
	const urlImg = "https://image.tmdb.org/t/p/w1280";
    const fullUrl =  urlImg + movieDetails.backdrop_path

	return (
		<>
			{movieDetails && 
                <div 
                    className="backdrop-slider"
                    style={{
                        backgroundImage: `url(${fullUrl})`
                    }}
                />
			}
		</>
	);
}
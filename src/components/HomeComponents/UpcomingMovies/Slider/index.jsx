import React, { useEffect, useRef, useState } from "react";
import OverlaySpinner from '../../../Resources/OverlaySpinner'
import { useNavigate } from "react-router-dom";
import pathroutes from "../../../../helpers/pathroutes";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./index.css";

// import required modules
import { EffectCoverflow, Pagination, Mousewheel } from "swiper/modules";

export default function Slider() {
	const [upcoming, setUpcoming] = useState(null);
	const navigate = useNavigate()

	const language = 1;
	const apiKey = "4d1a073d6e646d93ce0400ffa3b8d13e";
	const endPointBg = "https://api.themoviedb.org/3";
	const urlImg = "https://image.tmdb.org/t/p/w1280/";
	const urlArray = [
		//Main.js 0 to 6
		`${endPointBg}/movie/now_playing?api_key=${apiKey}&language=${language}&page=1&include_adult=false&region=AR`,
		`${endPointBg}/movie/upcoming?api_key=${apiKey}&language=${language}&page=1&include_adult=false&region=US`,
	];

	const upcomingUrl = urlArray[1];

	useEffect(() => {
		fetch(upcomingUrl)
			.then((res) => res.json())
			.then((data) => {
				setUpcoming(data.results);
			});
	}, []);

	return (
		<section className="mt-0 pb-5" style={{width:'100%'}}>
			{upcoming 
				?<Swiper
					effect={"coverflow"}
					grabCursor={true}
					centeredSlides={false}
					loop={true}
					mousewheel={true}
					slidesPerView={"auto"}
					coverflowEffect={{
						rotate: 50,
						stretch: 0,
						depth: 100,
						modifier: 1,
						slideShadows: true,
					}}
					pagination={{
						clickable: true,
					}}
					modules={[EffectCoverflow, Pagination, Mousewheel]}
					className="pt-0 m-0"
					style={{transition: '1000ms'}}
					
				>
					{upcoming.map(
							(e, i) =>
								e.poster_path && (
									<SwiperSlide key={i}>
										<img
											src={`${urlImg}${e.poster_path}`}
											alt={e.title}
											title={e.title}
											aria-label={e.title}
											style={{cursor:'grab'}}
											onClick={()=>navigate(pathroutes.details + e.id+'?upcoming=true')}
										/>
									</SwiperSlide>
								)
						)
					}
				</Swiper>
				: <OverlaySpinner />
			}
		</section>
	);
}

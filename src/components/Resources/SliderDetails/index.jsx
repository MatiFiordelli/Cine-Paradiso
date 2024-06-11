import React from 'react'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./index.css";
import { Mousewheel/* , Pagination */ } from "swiper/modules";

export default function SliderDetails({ array, castOrCrew, direction }) {
    const urlImg = "https://image.tmdb.org/t/p/w1280/";

    return (
        <>
		{array &&
		<>
			<Swiper
				effect='slide'
				slidesPerView={5}
				spaceBetween={5}
				direction={direction}
				grabCursor={true}
				lazy={true.toString()}
				loop={true}
				mousewheel={true}
				/* pagination={{
					clickable: true,
				}} */
				modules={[Mousewheel]}
				className="mySwiper overflow-hidden py-0 mb-3 ps-1 pt-2"
			>
				{array.map((e,i)=>(
					e.profile_path &&
				<SwiperSlide key={i}>
					<div
						className={`d-flex ${direction==='horizontal' ? 'flex-column' : 'flex-row '}`}
					>
						<img
							src={`${urlImg}${e.profile_path}`}
							alt={`${e.original_name} - ${e.character}`}
							title={`${e.original_name} - ${e.character}`}
							aria-label={`${e.original_name} - ${e.character}`}
							className="rounded rounded-5"
							loading="lazy"
						/>
						<div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
						<div className="my-auto my-md-3 ms-3">
							<p className=" bg-transparent fw-bold ">
								{e.original_name}
							</p>
                            {castOrCrew==='cast'
							?<p className="fst-italic">{e.character}</p>
                            :<p className="fst-italic">{e.job}</p>
                            }
						</div>
					</div>
				</SwiperSlide>
				))
				}
			</Swiper>
			</>
			}
		</>
    )
}

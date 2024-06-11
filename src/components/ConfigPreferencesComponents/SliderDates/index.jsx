import React, { useEffect, useState, memo } from "react";
import DatesCard from "./DatesCard";
import { getDateData } from "./helpers.js";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "./index.css";
import { Mousewheel, FreeMode /* , Pagination */ } from "swiper/modules";

const SliderDates = () => {
	const [dates, setDates] = useState([]);

	const createDatesArray = () => {
		for (let i = 0; i < 7; i++) {
			setDates((prev) => [...prev, getDateData(i)]);
		}
	};

	useEffect(() => {
		createDatesArray();
	}, []);

	return (
		<>
			{dates.length > 0 && (
				<Swiper
					effect="slide"
					slidesPerView={5}
					spaceBetween={15}
					freeMode={true}
					direction={"horizontal"}
					grabCursor={true}
					/* lazy={true.toString()} */
					loop={true}
					mousewheel={true}
					/* pagination={{
						clickable: true,
					}} */
					modules={[FreeMode, Mousewheel]}
					className="swiper3"
				>
					{dates?.map((e, i) => (
						<SwiperSlide key={i}>
							<DatesCard
								dayName={e.dayName}
								dayNumber={e.dayNumber}
								monthName={e.monthName}
								monthNumber={e.monthNumber}
							/>
						</SwiperSlide>
					))}
				</Swiper>
			)}
		</>
	);
}
export default memo(SliderDates)
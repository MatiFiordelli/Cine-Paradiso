import React, { useContext } from "react";
import "./index.css";
import { ConfigPreferencesCtx } from "../../../../contexts";

export default function DatesCard({ dayName, dayNumber, monthName, monthNumber }) {
	const { setDateSelection, hourSelection, setHourSelection } = useContext(ConfigPreferencesCtx);

	const handleClick = (e) => {
		setHourSelection(null)
		setDateSelection({
			dayName: dayName,
			dayNumber: dayNumber,
			monthName: monthName,
			monthNumber: monthNumber
		})
		const el = document.querySelectorAll('.date-card')
		Array.from(el).forEach((e)=>{
			e.style.boxShadow='none';
		})
		
		e.currentTarget.style.boxShadow='0px 0px 7px 1px #999';
		
	}

	return (
		<section
			className="date-card"
			onClick={(e)=>handleClick(e)}
		>
			<div className="date-card__title">{dayName}</div>
			<div className="date-card__date">
				<p className="date-card__date--month">{monthName}</p>
				<p className="date-card__date--day">{dayNumber}</p>
			</div>
		</section>
	);
}

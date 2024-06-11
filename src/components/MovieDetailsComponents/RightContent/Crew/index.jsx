import React, { useContext } from "react";
import SliderDetails from "../../../Resources/SliderDetails";
import { PeopleDetailsCtx } from "../../../../contexts";

export default function Crew({ direction }) {
	const { peopleDetails } = useContext(PeopleDetailsCtx);

	return (
		<section className="mb-2 overflow-hidden ">
			<p className="fw-bold mb-1">EQUIPO DE FILMACIÓN:</p>
		{peopleDetails &&
			<SliderDetails array={peopleDetails.crew} castOrCrew={'crew'} direction={direction} />	
		}
		</section>
	);
}

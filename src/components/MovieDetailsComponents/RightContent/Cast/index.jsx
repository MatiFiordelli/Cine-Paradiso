import React, { useContext } from "react";
import { PeopleDetailsCtx } from "../../../../contexts";
import SliderDetails from "../../../Resources/SliderDetails";

export default function Cast({ direction }) {
	const { peopleDetails } = useContext(PeopleDetailsCtx);

	return (
		<section className="mb-2 overflow-hidden ">
			<p className="fw-bold mb-1">ELENCO:</p>
		{peopleDetails &&
			<SliderDetails array={peopleDetails.cast} castOrCrew={'cast'} direction={direction} />	
		}
		</section>
	);
}

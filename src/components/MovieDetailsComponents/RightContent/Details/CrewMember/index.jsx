import React, { useContext } from "react";
import { PeopleDetailsCtx } from "../../../../../contexts";

export default function CrewMember({ labelTitle, job }) {
	const { peopleDetails } = useContext(PeopleDetailsCtx);

	const getCrew = (job) => {
		const array = peopleDetails?.crew?.filter((e) => e.job === job)

		if (array.length > 0) {
			return array
		} else {
			return [{original_name: 'No disponible'}]
		}		
	};

	return (
		<>
			{peopleDetails?.crew && (
				<>
					<dt>
						<em>
							<strong>{labelTitle}:</strong>
						</em>
					</dt>
					<dd className="d-flex flex-column">
						{getCrew( job )?.map((e, i) => (
							<span key={i}>{e.original_name}</span>
						))
						}
					</dd>
				</>
			)}
		</>
	);
}

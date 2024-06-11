import React, { useContext } from "react";
import { MovieDetailsCtx } from "../../../../contexts";

export default function Synopsis({}) {
	const { movieDetails } = useContext(MovieDetailsCtx);

	return (
		<section className="mb-2">
			<p className="fw-bold mb-1">
				SINOPSIS:
			</p>
			<p>{movieDetails.overview || "No disponible"}</p>
		</section>
	);
}

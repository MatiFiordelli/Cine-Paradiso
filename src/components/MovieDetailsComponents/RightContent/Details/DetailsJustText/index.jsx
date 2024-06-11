import React from "react";

export default function DetailsJustText({ labelTitle, detailText}) {
	
	const translated = new Map([
		['Rumored', 'Se Rumorea'],
		['Planned', 'Planeada'],
		['In Production', 'En Producción'],
		['Post Production', 'En Posproducción'],
		['Released', 'Estrenada'],
		['Canceled', 'Cancelada']	
	])

	return (
		<>
			<dt>
				<em>
					<strong>{labelTitle}:</strong>
				</em>
			</dt>
			<dd>{translated.get(detailText) || "No disponible"}</dd>
		</>
	);
}

import React from "react";

export default function ProductionOrigin({ labelTitle, productionInfo }) {
	return (
		<>
			<dt>
				<em>
					<strong>{labelTitle}:</strong>
				</em>
			</dt>
			{productionInfo.length > 0 ? (
				<>
					<dd className="d-flex flex-column">
						{productionInfo.map((e, i) => {
							return <span key={i}>{e.name}</span>;
						})}
					</dd>
				</>
			) : (
				<dd className="d-flex flex-column">No disponible</dd>
			)}
		</>
	);
}

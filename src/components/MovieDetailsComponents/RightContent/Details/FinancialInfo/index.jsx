import React from "react";

export default function FinancialInfo({ labelTitle, financialValue }) {
    
	return (
		<>
			<dt>
				<em>
					<strong>{labelTitle}:</strong>
				</em>
			</dt>
			<dd>
				{ + financialValue > 0
					? `$${financialValue.toLocaleString("es-ES")}`
					: "No disponible"}
			</dd>
		</>
	);
}

import React, { useContext, memo } from "react";
import { ConfigPreferencesCtx } from "../../../contexts";
import './index.css'

const DetailsPreferences = () => {
	const {
		dateSelection,
		hourSelection,
		dataPrices,
		seatsCodeSelectionArray,
		getSumAmountTicket
	} = useContext(ConfigPreferencesCtx);

	return (
		<table className="table-details table table-striped table-hover table-dark table-bordered border-light mx-auto">
			<tbody>
				<tr>
					<th>Fecha:</th>
					<td>
						{dateSelection ? (
							<strong>
								{dateSelection.dayName},{" "}
								{dateSelection.dayNumber} de{" "}
								{dateSelection.monthName}
							</strong>
						) : (
							<strong className="text-danger">
								Elegir una fecha!
							</strong>
						)}
					</td>
				</tr>
				<tr>
					<th>Hora:</th>
					<td>
						{hourSelection
							? <strong>{hourSelection}</strong>
							: <strong className="text-danger">Elegir un horario!</strong>}
					</td>
				</tr>
				<tr>
					<th>Tickets:</th>
					<td>
						{getSumAmountTicket()>0 
							? dataPrices?.map((e, i) => (
								<p key={i} className="p-0 m-0">
									<small>
										<span className="fst-italic text-info">
											{e.type}:{" "}
										</span>
									</small>
									<strong>{e.amount}</strong>
								</p>))
							: <strong className="text-danger">Elegir al menos un ticket!</strong>
						}
					</td>
				</tr>
				<tr>
					<th>Asientos:</th>
					<td>
						{seatsCodeSelectionArray?.map((e, i) => {
								return (
									<p className="m-0" key={i}>
										<strong>{e}</strong>
									</p>
								);
							})
						}
						{!(seatsCodeSelectionArray.length === getSumAmountTicket() &&
							seatsCodeSelectionArray.length > 0) &&
								<strong className="text-danger">
									Elegir la misma cantidad de Asientos que tickets a comprar!
								</strong>
						}
					</td>
				</tr>
				<tr>
					<th>Total:</th>
					<td>
						<strong>
							$
							{dataPrices?.reduce(
								(accum, curr) => accum + curr.subTotal,
								0
							)}
						</strong>
					</td>
				</tr>
			</tbody>
		</table>
	);
};
export default memo(DetailsPreferences);

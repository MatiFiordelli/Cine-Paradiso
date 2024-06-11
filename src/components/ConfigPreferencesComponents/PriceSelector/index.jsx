import React, { useContext, memo, useEffect, useState } from "react";
import Amount from "./Amount";
import { ConfigPreferencesCtx } from "../../../contexts";
import './index.css'

const PriceSelector = () => {
	const { dataPrices, setDataPrices, hourSelection, seatsDetails } = useContext(ConfigPreferencesCtx);
	const [allowToRiseAmount, setAllowToRiseAmount] = useState(null)

	const sumAmountTickets = () => {
		return dataPrices?.reduce((accum, curr)=>{
			return accum + curr.amount
		},0)		
	}

	useEffect(()=>{
		let sum = sumAmountTickets()
		
		let availableSeats = null
		if(seatsDetails){
			availableSeats = seatsDetails.totalSeats - seatsDetails.reservedSeatsAmount

			if(availableSeats === sum) {
				setAllowToRiseAmount(false)
			} else{
				setAllowToRiseAmount(true)
			}
		}  

	},[dataPrices, seatsDetails])

	return (
		<>
			{dataPrices && hourSelection && (
				<table className="table-prices table table-striped table-light table-bordered m-auto">
					<thead>
						<tr>
							<th>Tipo</th>
							<th>Precio</th>
							<th>Cantidad</th>
							<th>Subtotal</th>
						</tr>
					</thead>
					<tbody>
						{dataPrices.map((e, i) => (
							<tr key={i} className="align-middle">
								<td className="p-0">
									<label className="bg-transparent mx-2">{e.type}</label>
								</td>
								<td>
									<input
										type="text"
										className="form-control bg-transparent w-100 border-0 text-start p-0"
										id={`priceTicket${i}`}
										placeholder="0"
										aria-label="Price of movie tickets input"
										value={`$${e.price}`}
										onChange={() => {}}
									/>
								</td>
								<td>
									<Amount
										i={i}
										setDataPrices={setDataPrices}
										dataPrices={dataPrices}
										allowToRiseAmount={allowToRiseAmount}
									/>
								</td>
								<td>
									<input
										type="text"
										className="form-control bg-transparent w-100 border-0 text-start p-0"
										id={`subtotal${i}`}
										placeholder="0"
										aria-label="Subtotal of movie tickets input"
										value={`$${e.subTotal}`}
										onChange={() => {}}
									/>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			)}
		</>
	);
}
export default memo(PriceSelector)
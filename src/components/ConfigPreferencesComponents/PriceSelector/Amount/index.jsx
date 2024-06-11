import React, { useContext, useEffect, useState } from "react";
import './index.css'
import { ConfigPreferencesCtx } from "../../../../contexts";

export default function Amount({ i, setDataPrices, dataPrices, allowToRiseAmount }) {
	const { hourSelection } = useContext(ConfigPreferencesCtx)
	const [amount, setAmount] = useState(0);

	const controlLessThanZero = () => {
		amount > 0 && setAmount((prev) => prev - 1);
	};

	useEffect(() => {
		const obj = dataPrices[i]
		obj.amount = amount
		obj.subTotal = obj.amount * obj.price

		const dataPricesObj = [...dataPrices]
		dataPricesObj[i] = obj
		
		dataPrices && setDataPrices([...dataPricesObj])
        
	}, [amount])

	useEffect(()=>{
		if(dataPrices){
			const obj = dataPrices.map((e)=>{
				return {...e, amount:0, subTotal:0}
			})
			
			setDataPrices([...obj])
			setAmount(0)
		}

	},[hourSelection])

	return (
		<section className="amount-selector m-auto">
			<form
				className="btn-group"
				role="group"
				aria-label="Amount of movie tickets form"
				onSubmit={(e) => e.preventDefault()}
			>
				<button
					type="button"
					className="btn btn-secondary w-25 p-0"
					onClick={controlLessThanZero}
				>
					{"-"}
				</button>
				<input
					type="number"
					className="inputNumber form-control bg-transparent w-75 text-center user-select-none"
					style={{ pointerEvents: "none" }}
					id={`amountId${i}`}
					placeholder="0"
					aria-label="Amount of movie tickets input"
					value={amount}
					readOnly={true}
					min={0}
					onChange={() => {}}
				/>
				<button
					type="button"
					className="btn btn-secondary w-25 p-0"
					disabled= {allowToRiseAmount ? false : true}
					onClick={() => setAmount((prev) => prev + 1)}
				>
					{"+"}
				</button>
			</form>
		</section>
	);
}

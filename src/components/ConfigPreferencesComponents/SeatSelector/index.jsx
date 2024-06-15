import React, { useRef, memo, useContext, useEffect } from "react";
import "./index.css";
import SeatRows from "./SeatRows";
import { ConfigPreferencesCtx, MatrixCtx } from "../../../contexts";
import Seat from "./SeatRows/SeatColumns/Seat";
import Legend from "./Legend";

const SeatSelector = () => {
	const seatCounterRef = useRef(0);
	const { hourSelection, dateSelection } = useContext(ConfigPreferencesCtx);
	
	useEffect(() => {
		seatCounterRef.current=0	
	}, [hourSelection, dateSelection])

	return (
		<MatrixCtx.Provider value={{ seatCounterRef }}>
			{hourSelection && 
			<section className="seat-selector-container">
				<section className="seat-selector">
					<div className="seat-selector__left">
						<SeatRows rows={10} cols={4} />
					</div>
					<div className="seat-selector__center">
						<SeatRows rows={10} cols={10} />
					</div>
					<div className="seat-selector__right">
						<SeatRows rows={10} cols={4} />
					</div>
				</section>
				<section className="accessibility-space-selector">
					<Seat seatType="special" />
					<Seat seatType="special" />
					<Seat seatType="special" />
					<Seat seatType="special" />
					<Seat seatType="special" />
				</section>

				<Legend />
			</section>
			}
		</MatrixCtx.Provider>
	);
};

export default memo(SeatSelector);

import React, { memo } from "react";
import Seat from "./Seat";

const SeatColumns = ({ cols }) => {
	const colsArray = new Array(cols).fill(null);

	return (
		<>
			{colsArray.length > 0 &&
				colsArray.map((e, i) => (
					<div key={i}>
						<Seat seatType='normal' />
					</div>
				))}
		</>
	);
}

export default memo(SeatColumns)
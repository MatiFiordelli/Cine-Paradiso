import React, { memo } from "react";
import SeatColumns from "./SeatColumns";

const SeatRows = ({ rows, cols }) => {
	const rowsArray = new Array(rows).fill(null);

	return (
		<>
			{rowsArray.length > 0 &&
				rowsArray.map((e, i) => (
					<div key={i} className="d-flex">
						<SeatColumns cols={cols} />
					</div>
				))}
		</>
	);
}

export default memo(SeatRows)
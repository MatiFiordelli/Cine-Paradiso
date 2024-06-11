import React, { memo } from "react";
import Poster from "./Poster";
import BriefInfo from "./BriefInfo";
import ButtonsGroup from "./ButtonsGroup";

function Card({ data, i }) {
	const { title, poster_path, id } = data

	return (
		<>
			{title && (
				<div className="card-my-style rounded p-0 border-0 text-center">
					<Poster title={title} poster={poster_path} id={id} />
					<BriefInfo data={data} i={i} id={id} />
					<ButtonsGroup i={i} id={id} />
				</div>
			)}
		</>
	);
}
export default memo(Card);

import React from "react";
import { useNavigate } from 'react-router-dom'
import LittleStarSVG from "../../../../../assets/svg/star.svg";
import getGenre from "../../../../../helpers/getGenres";
import './index.scss'
import pathroutes from "../../../../../helpers/pathroutes";

export default function BriefInfo({ data, i, id}) {
    const { title, overview, vote_average, genre_ids } = data
	const navigate = useNavigate()
	const url = pathroutes.details + id

	return (
		<article
			className="card-body m-2 text-start p-0"
			onClick={() => navigate(url)}
		>
			<p className="card-body__title m-0 mb-1">{title ? title : 'No disponible'}</p>
			<div
				className="card-body__hidden-block mb-2 collapse"
				id={`collapseExample${i}`}
			>
				<p className="card-body__hidden-block--overview mb-2">
					<small>{overview ? overview : 'No disponible'}</small>
				</p>
				<div className="d-flex gap-2 justify-content-start align-items-center mb-2">
					<img src={LittleStarSVG} style={{ fill: "#f5c518" }} />
					<small>{vote_average ? vote_average.toFixed(1) : '-'}</small>
				</div>

				<div className="card-body__hidden-block--genres d-flex flex-wrap ">
					{genre_ids 
						? genre_ids.map((e, i) => {
							return (
								<small key={i}>
									<em>
										<span>
											{getGenre(e)}
											&nbsp;•&nbsp;
										</span>
									</em>
								</small>
							);
						})
						: 'No disponible'
					}
				</div>
			</div>
		</article>
	);
}

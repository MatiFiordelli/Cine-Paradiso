import React, { useContext, Fragment } from "react";
import { MovieDetailsCtx } from "../../../../contexts";
import './index.css'

export default function SummaryBar() {
    const {movieDetails} = useContext(MovieDetailsCtx)

	return (
		<div className="summary-bar col-12 col-sm-8 col-lg-9">
			{movieDetails.title !== "" && (
				<h1 className="summary-bar__title">{movieDetails.title}</h1>
			)}

			<div className="summary-bar__subtitle">
				{movieDetails.release_date !== "" && (
					<div className="summary-bar__subtitle--year">
						{movieDetails.release_date.slice(0, 4)}
					</div>
				)}

				{movieDetails.runtime !== 0 && (
					<>
						<span>&nbsp;•&nbsp;</span>
						<span className="summary-bar__subtitle--runtime">
							{movieDetails.runtime} mins
						</span>
					</>
				)}

				{movieDetails.genres.length !== 0 && (
					<>
						<span>&nbsp;•&nbsp;</span>
						<span className="summary-bar__subtitle--genres">
							{movieDetails.genres.map((e, i, a) => (
								<Fragment key={i}>
									{e.name}
									{i === a.length - 1 ? " " : ", "}
								</Fragment>
							))}
						</span>
					</>
				)}

                {movieDetails.runtime !== 0 && (
					<>
						<span>&nbsp;•&nbsp;</span>
						<span className="summary-bar__subtitle--vote_average">
							{Math.round(movieDetails.vote_average*10)/10}
						</span>
					</>
				)}

			</div>
		</div>
	);
}

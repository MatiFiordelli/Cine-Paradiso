import React, { Fragment, useContext } from "react";
import { MovieDetailsCtx, PeopleDetailsCtx } from "../../../../contexts";
import CrewMember from "./CrewMember";
import FinancialInfo from "./FinancialInfo";
import DetailsJustText from "./DetailsJustText";
import LanguageInfo from "./LanguageInfo";
import ProductionOrigin from "./ProductionOrigin";

export default function MovieDetails() {
	const { movieDetails } = useContext(MovieDetailsCtx);
	const { peopleDetails } = useContext(PeopleDetailsCtx);

	return (
		<>
			{movieDetails && (
				<section className="mb-2">
					<p className="fw-bold mb-1">DETALLES:</p>
					<dl className="row row-cols-2">
						<DetailsJustText
							labelTitle="Título Original"
							detailText={movieDetails.original_title}
						/>
						<DetailsJustText
							labelTitle="Slogan"
							detailText={movieDetails.tagline}
						/>
						<DetailsJustText
							labelTitle="Estado Actual"
							detailText={movieDetails.status}
						/>

						<dt>
							<em>
								<strong>Fecha de Lanzamiento:</strong>
							</em>
						</dt>
						<dd className="text-capitalize">
							{new Date(
								movieDetails.release_date
							).toLocaleDateString("es-ES", {
								weekday: "long",
								year: "numeric",
								month: "long",
								day: "numeric",
							})}
						</dd>

						<LanguageInfo
							labelTitle="Idioma Original"
							languageInfo={movieDetails.original_language}
							isMoreThanOneLanguage={false}
						/>
						<LanguageInfo
							labelTitle="Idiomas Hablados"
							languageInfo={movieDetails.spoken_languages}
							isMoreThanOneLanguage={true}
						/>

						<ProductionOrigin
							labelTitle="Países de Producción"
							productionInfo={movieDetails.production_countries}
						/>
						<ProductionOrigin
							labelTitle="Compañías de Producción"
							productionInfo={movieDetails.production_companies}
						/>

						<FinancialInfo
							labelTitle="Presupuesto"
							financialValue={movieDetails.budget}
						/>
						<FinancialInfo
							labelTitle="Recaudación"
							financialValue={movieDetails.revenue}
						/>

						<CrewMember labelTitle="Director" job="Director" />
						<CrewMember labelTitle="Productor" job="Producer" />
						<CrewMember
							labelTitle="Productor Ejecutivo"
							job="Executive Producer"
						/>
						<CrewMember labelTitle="Guión" job="Screenplay" />
					</dl>
				</section>
			)}
		</>
	);
}

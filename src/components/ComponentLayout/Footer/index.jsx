import React from "react";
import facebookSvg from "../../../assets/svg/socialMedia/facebook.svg";
import instagramSvg from "../../../assets/svg/socialMedia/instagram.svg";
import gmailSvg from "../../../assets/svg/socialMedia/gmail.svg";
import xSvg from "../../../assets/svg/socialMedia/x.svg";
import "./index.css";
import pathroutes from "../../../helpers/pathroutes.js/";

export default function Footer() {
	return (
		<footer className="footer vw-100" style={{fontVariant: 'small-caps'}}>
			<div className="d-flex flex-column flex-sm-row text-center text-sm-start">
				<div className="w-100 w-sm-50 p-3">
					<p className="h4 mb-3">CINE PARADISO</p>
					<p className="h6 mb-4 lh-base">
						Cine Paradiso, Tu portal para descubrir el séptimo arte.<br />
						En Cine Paradiso, celebramos la magia del cine con
						trailers, informaciones y próximos estrenos. <br />
						Únete a nuestra comunidad de
						cinéfilos y mantente al día con lo último en la
						industria cinematográfica.
					</p>

					<p className="m-0">Teléfono: +1 234 567 890</p>
					<p className="m-0">Dirección: Calle Falsa 123, Ciudad Imaginaria</p>
				</div>
				
				<div className="d-flex flex-column gap-4 justify-content-center align-items-center w-100 w-sm-50 p-3">
					<div className="d-flex gap-5">
						<a href={`mailto:${pathroutes.gmail}`} title="Gmail" target="_blank">
							<img
								src={gmailSvg}
								alt="Gmail"
								aria-label="Gmail icon link"
								width={30}
								height={30}
							/>
						</a>
						<a
							href={pathroutes.facebook}
							title="Facebook"
							target="_blank"
						>
							<img
								src={facebookSvg}
								alt="Facebook"
								aria-label="Facebook icon link"
								width={30}
								height={30}
							/>
						</a>
						<a
							href={pathroutes.instagram}
							title="Instagram"
							target="_blank"
						>
							<img
								src={instagramSvg}
								alt="Instagram"
								aria-label="Instagram icon link"
								width={30}
								height={30}
							/>
						</a>
						<a
							href={pathroutes.x}
							title="X"
							target="_blank"
						>
							<img
								src={xSvg}
								alt="X"
								aria-label="X icon link"
								width={30}
								height={30}
							/>
						</a>
					</div>
					<div className="d-flex flex-column my-0 gap-1 lh-base">
						<a
							className="text-light"
							href={pathroutes.terms_and_conditions}
							title="Términos y Condiciones"
						>
							Términos y Condiciones
						</a>
						<a
							className="text-light"
							href={pathroutes.privacy_policies}
							title="Políticas de Privacidad"
						>
							Políticas de Privacidad
						</a>
						<a
							className="text-light"
							href={pathroutes.faq}
							title="Preguntas Frecuentes"
						>
							Preguntas Frecuentes
						</a>
					</div>
				</div>
			</div>
			<p className="copyright p-2 m-0 text-center">
				Copyright ©2024
				<a
					href={pathroutes.linkedin}
					title="Ir a LinkedIn.."
					className="ms-1 text-white-50"
				>
					Alguien
				</a>
			</p>
		</footer>
	);
}

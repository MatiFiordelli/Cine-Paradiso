import React from "react";

export default function Menu({ posterTopPx }) {
	return (
		<div
			className="menu-title d-flex flex-column position-relative"
			style={{
				top: `-${posterTopPx *2}px`,
				width: '97%'
			}}
		>
			<p>
				<a href="#synopsis">SINOPSIS</a>
			</p>
			<p>
				<a href="#cast">ELENCO</a>
			</p>
			<p>
				<a href="#details">DETALLES</a>
			</p>
			<p>
				<a href="#crew">EQUIPO DE FILMACION</a>
			</p>
		</div>
	);
}

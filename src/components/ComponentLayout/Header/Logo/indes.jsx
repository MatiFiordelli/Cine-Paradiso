import React from "react";
import LogoImage from "../../../../assets/images/CineParadiso/logo.webp";
import "./index.css";
import pathroutes from "../../../../helpers/pathroutes";

export default function Logo() {
	return (
		<>
			<div
				className="bg-transparent"
				style={{
					width: "100px",
					height: "100px",
				}}
			>
				<a
					href={pathroutes.home}
					data-text="Login"
					aria-label="Logo link"
				>
					<img
						src={LogoImage}
						alt="Logo"
						aria-label="Logo image"
						className="image-logo w-100 p-1"
					/>
				</a>
			</div>
		</>
	);
}

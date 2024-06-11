import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import Logo from "./Logo/indes";
import "./index.css";

export default function Header({ headerHeight }) {
	//Hide the Search Bar on scroll
	const [headerTop, setHeaderTop] = useState("0px");
	let prevScrollPos = window.scrollY;

	const hideSearchBar = () => {
		let currentScrollPos = window.scrollY;

		//Controls if the scrollY is up or down
		prevScrollPos < currentScrollPos
			? setHeaderTop("-100px")
			: setHeaderTop("0px");

		prevScrollPos = currentScrollPos;
	};

	window.onscroll = () => {
		hideSearchBar();
	};

	return (
		<header
			className="header position-fixed"
			style={{
				top: `${headerTop}`,
			}}
		>
			<div
				className="d-flex justify-content-between min-vw-100"
				style={{
					backgroundImage:
						"linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.4), transparent)",
				}}
			>
				<Logo />
				<Nav headerHeight={headerHeight} />
			</div>
		</header>
	);
}

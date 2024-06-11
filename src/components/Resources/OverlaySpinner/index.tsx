import React from 'react'
import AnimatedSpinner from "./AnimatedSpinner";

export default function OverlaySpinner() {
	return (
		<section
			className="d-flex justify-content-center align-items-center"
			style={{ width:'100dvw', height: "100dvh" }}
		>
			<AnimatedSpinner />
		</section>
	);
}

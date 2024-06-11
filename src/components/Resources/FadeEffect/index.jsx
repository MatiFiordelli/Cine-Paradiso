//para ser terminada en otro momento

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import './index.css'

export default function FadeEffect({ children }) {
	const location = useLocation();

	window.onbeforeunload = () => {
		const el = document.querySelector(".fade");
		/* if (el) */ el.style.opacity = 0;
	};

	useEffect(() => {
		const el = document.querySelector(".fade");
		/* if (el) */ el.style.opacity = 0;
	}, []);

    useEffect(() => {
		const el = document.querySelector(".fade");
        //console.log(el)
		//if (el) el.style.opacity = 0;
        if (el) el.style.opacity = 1;
	}, [location]);

	return (
        <div 
			className="fade"
		>
            {children}
        </div>
    );
}

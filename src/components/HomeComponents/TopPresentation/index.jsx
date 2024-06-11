import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import './index.css'

export default function TopPresentation() {
	const [urlArray, setUrlArray] = useState(null)
	const [url, setUrl] = useState(null)
	
	const [sizeWidth, setSizeWidth] = useState(window.innerWidth);
	const [visible, setVisible] = useState("hidden");

    window.onresize = () => {
        setSizeWidth(window.innerWidth)
    }

	useEffect(()=>{
		const params = '?si=A6MpsJXJ7WJE401P?autoplay=1&mute=1&widgetid=1'
		setUrlArray([
			`https://www.youtube.com/embed/I0_qFoptZ4Y${params}`,
			`https://www.youtube.com/embed/mb2187ZQtBE${params}`,
			`https://www.youtube.com/embed/FI4xFqXL5ww${params}`,
			`https://www.youtube.com/embed/Kdr5oedn7q8${params}`,
			`https://www.youtube.com/embed/Y5nq2APYURE${params}`,
			`https://www.youtube.com/embed/kg3Q63gzF6I${params}`,
			`https://www.youtube.com/embed/HpOBXh02rVc${params}`,
			`https://www.youtube.com/embed/hWbfohXIdEU${params}`,
			`https://www.youtube.com/embed/UWbYnO5VRFY${params}`,
			`https://www.youtube.com/embed/LEjhY15eCx0${params}`,
			`https://www.youtube.com/embed/FI4xFqXL5ww${params}`,
			`https://www.youtube.com/embed/DhRsn1MyPAs${params}`,
			`https://www.youtube.com/embed/USl4xJ6TuOM${params}`
		])
	},[])

	useEffect(()=>{
		if(urlArray){
			const index = Math.floor(Math.random() * urlArray.length)
			setUrl(urlArray[index])
		}
	},[urlArray])

	return (
		<section
			className="top-presentation d-flex justify-content-center align-items-center overflow-hidden"
			style={{
				width: "100vw",
				height: "530px",
				backgroundColor:'#000',
			}}
		>
			{url && 
				<ReactPlayer
					url={`${url}`}
					playing={true}
					controls={false}
					width={sizeWidth}
					height={360}
					muted={true}
					loop={true}
					style={{
						visibility: visible,
						scale: "2",
					}}
					onBufferEnd={() => setVisible("visible")}
					onError={(err)=> console.log(err)}
				/>
			}
		</section>
	);
}

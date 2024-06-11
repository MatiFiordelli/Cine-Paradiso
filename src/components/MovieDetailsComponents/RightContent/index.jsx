import React, { useContext, useEffect, useState } from "react";
import Synopsis from "./Synopsis";
import Cast from "./Cast";
import Details from "./Details";
import Crew from "./Crew";
import "./index.css";
import { useNavigate } from "react-router-dom";
import pathroutes from "../../../helpers/pathroutes";

export default function RightContent({ id }) {
	const navigate = useNavigate();
	const [isUpcomingMovie, setIsUpcomingMovie] = useState(null)
	
	useEffect(()=>{
		const url = new URL(window.location)
		if (url.searchParams.get('upcoming')){
			setIsUpcomingMovie(true)
		} else{
			setIsUpcomingMovie(null)
		}
	},[])

	const handleClick = () => {
		const obj = {
			id: id
		}
		sessionStorage.setItem('movieSelected', JSON.stringify(obj))
		navigate(`${pathroutes.config_preferences}`);
	};

	return (
		<>
			<section className="right-content-details d-none d-md-grid ms-auto me-0 col-12 col-sm-8 col-lg-9 p-3 position-relative overflow-hidden">
				{!isUpcomingMovie && <button
					className="w-50 m-auto mb-4 p-2 bg-success text-light border-none rounded-1"
					onClick={() => handleClick()}
					style={{fontVariant: 'small-caps'}}
				>
					Comprar Tickets!
				</button>}
				<a id="synopsis" />
				<Synopsis />
				<a id="cast" />
				<Cast direction="horizontal" />
				<a id="details" />
				<Details />
				<a id="crew" />
				<Crew direction="horizontal" />
				{!isUpcomingMovie && <button
					className="w-50 m-auto mb-4 p-2 bg-success text-light border-none rounded-1"
					onClick={() => handleClick()}
					style={{fontVariant: 'small-caps'}}
				>
					Comprar Tickets!
				</button>}
			</section>

			<section className="right-content-details d-flex d-md-none flex-column ms-auto me-0 col-12 col-sm-8 col-lg-9 p-3 position-relative ">
				{!isUpcomingMovie && <button
					className="w-50 m-auto mb-4 p-2 bg-success text-light border-none rounded-1"
					onClick={() => handleClick()}
					style={{fontVariant: 'small-caps'}}
				>
					Comprar Tickets!
				</button>}
				<ul className="nav nav-tabs" id="myTab" role="tablist">
					<li className="nav-item" role="presentation">
						<button
							className="nav-link active"
							id="home-tab"
							data-bs-toggle="tab"
							data-bs-target="#home"
							type="button"
							role="tab"
							aria-controls="home"
							aria-selected="true"
						>
							Info
						</button>
					</li>
					<li className="nav-item" role="presentation">
						<button
							className="nav-link"
							id="profile-tab"
							data-bs-toggle="tab"
							data-bs-target="#profile"
							type="button"
							role="tab"
							aria-controls="profile"
							aria-selected="false"
						>
							Elenco
						</button>
					</li>
					<li className="nav-item" role="presentation">
						<button
							className="nav-link"
							id="contact-tab"
							data-bs-toggle="tab"
							data-bs-target="#contact"
							type="button"
							role="tab"
							aria-controls="contact"
							aria-selected="false"
						>
							Equipo de Filmación
						</button>
					</li>
				</ul>
				<div className="tab-content pt-4" id="myTabContent">
					<div
						className="tab-pane show active"
						id="home"
						role="tabpanel"
						aria-labelledby="home-tab"
					>
						<Synopsis />
						<Details />
					</div>
					<div
						className="tab-pane"
						id="profile"
						role="tabpanel"
						aria-labelledby="profile-tab"
					>
						<Cast direction="vertical" />
					</div>
					<div
						className="tab-pane"
						id="contact"
						role="tabpanel"
						aria-labelledby="contact-tab"
					>
						<Crew direction="vertical" />
					</div>
				</div>
				{!isUpcomingMovie && <button
					className="w-50 m-auto mb-4 p-2 bg-success text-light border-none rounded-1"
					onClick={() => handleClick()}
					style={{fontVariant: 'small-caps'}}
				>
					Comprar Tickets!
				</button>}
			</section>
		</>
	);
}

// import React, { useContext, useEffect } from "react";
// import Synopsis from "./Synopsis";
// import Cast from "./Cast";
// import Details from "./Details";
// import Crew from "./Crew";
// import "./index.css";
// import { useNavigate } from "react-router-dom";
// import pathroutes from "../../../helpers/pathroutes";
// import { useAuth } from "../../../contexts/AuthContext/index.jsx";

// export default function RightContent() {
//   const navigate = useNavigate();
//   const { isAuthenticated } = useAuth(); // Obtiene el estado de autenticación usando el hook useAuth

//   return (
//     <>
//       <section className="right-content-details d-none d-md-grid ms-auto me-0 col-12 col-sm-8 col-lg-9 p-3 position-relative overflow-hidden">
//         {isAuthenticated() && ( // Verifica si el usuario está autenticado
//           <button
//             className="w-50 m-auto mb-4 p-0 bg-success text-light border-none rounded-1"
//             onClick={() => navigate(`${pathroutes.config_preferences}`)}
//           >
//             <small>Comprar Tickets! (provisorio)</small>
//           </button>
//         )}
//         <a id="synopsis" />
//         <Synopsis />
//         <a id="cast" />
//         <Cast direction="horizontal" />
//         <a id="details" />
//         <Details />
//         <a id="crew" />
//         <Crew direction="horizontal" />
//       </section>

//       <section className="right-content-details d-flex d-md-none flex-column ms-auto me-0 col-12 col-sm-8 col-lg-9 p-3 position-relative ">
//         <ul className="nav nav-tabs" id="myTab" role="tablist">
//           <li className="nav-item" role="presentation">
//             <button
//               className="nav-link active"
//               id="home-tab"
//               data-bs-toggle="tab"
//               data-bs-target="#home"
//               type="button"
//               role="tab"
//               aria-controls="home"
//               aria-selected="true"
//             >
//               Info
//             </button>
//           </li>
//           <li className="nav-item" role="presentation">
//             <button
//               className="nav-link"
//               id="profile-tab"
//               data-bs-toggle="tab"
//               data-bs-target="#profile"
//               type="button"
//               role="tab"
//               aria-controls="profile"
//               aria-selected="false"
//             >
//               Elenco
//             </button>
//           </li>
//           <li className="nav-item" role="presentation">
//             <button
//               className="nav-link"
//               id="contact-tab"
//               data-bs-toggle="tab"
//               data-bs-target="#contact"
//               type="button"
//               role="tab"
//               aria-controls="contact"
//               aria-selected="false"
//             >
//               Equipo de Filmación
//             </button>
//           </li>
//         </ul>
//         <div className="tab-content pt-4" id="myTabContent">
//           <div
//             className="tab-pane show active"
//             id="home"
//             role="tabpanel"
//             aria-labelledby="home-tab"
//           >
//             <Synopsis />
//             <Details />
//           </div>
//           <div
//             className="tab-pane"
//             id="profile"
//             role="tabpanel"
//             aria-labelledby="profile-tab"
//           >
//             <Cast direction="vertical" />
//           </div>
//           <div
//             className="tab-pane"
//             id="contact"
//             role="tabpanel"
//             aria-labelledby="contact-tab"
//           >
//             <Crew direction="vertical" />
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

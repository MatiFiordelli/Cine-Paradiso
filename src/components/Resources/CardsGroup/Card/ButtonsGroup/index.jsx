import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";
import pathroutes from "../../../../../helpers/pathroutes";

export default function ButtonsGroup({ i, id }) {
	const navigate = useNavigate();

	const handleClick = () => {
		const obj = {
			id: id
		}
		sessionStorage.setItem('movieSelected', JSON.stringify(obj))
		navigate(`${pathroutes.config_preferences}`)
	}

	return (
		<div className="card__buttons d-flex gap-2 user-select-none mb-5">
			<button
				className="card__body--see-more w-50 h-100 m-0 p-0 bg-light text-dark border-none rounded-1 "
				type="button"
				data-bs-toggle="collapse"
				data-bs-target={`#collapseExample${i}`}
			>
				<small style={{fontVariant: 'small-caps'}}>Más Info</small>
			</button>
			<button
				className="card__body--tickets w-50 m-0 p-0 bg-success text-light border-none rounded-1"
				onClick={() => handleClick()}
			>
				<small style={{fontVariant: 'small-caps'}}>Tickets!</small>
			</button>
		</div>
	);
}

// import React from "react";
// import { useNavigate } from "react-router-dom";
// import "./index.css";
// import pathroutes from "../../../../../helpers/pathroutes";
// import { useAuth } from "../../../../../contexts/AuthContext/index.jsx"; // Asegúrate de importar el hook useAuth desde la ubicación correcta

// export default function ButtonsGroup({ i }) {
//   const navigate = useNavigate();
//   const { isAuthenticated } = useAuth(); // Obtener el estado de autenticación del contexto

//   return (
//     <div className="card__buttons d-flex gap-2 user-select-none mb-5">
//       <button
//         className={`card__body--see-more ${
//           isAuthenticated() ? "w-50" : "w-100"
//         } h-100 m-0 p-0 bg-light text-dark border-none rounded-1 `}
//         type="button"
//         data-bs-toggle="collapse"
//         data-bs-target={`#collapseExample${i}`}
//       >
//         <small>Más Info</small>
//       </button>
//       {isAuthenticated() && ( // Mostrar el botón solo si el usuario está autenticado
//         <button
//           className="card__body--tickets w-50 m-0 p-0 bg-success text-light border-none rounded-1"
//           onClick={() => navigate(`${pathroutes.config_preferences}`)}
//         >
//           <small>Tickets!</small>
//         </button>
//       )}
//     </div>
//   );
// }

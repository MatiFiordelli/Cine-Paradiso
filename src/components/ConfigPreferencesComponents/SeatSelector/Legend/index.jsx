import React from "react";
import ImageSeat from "../SeatRows/SeatColumns/Seat/ImageSeat";

export default function Legend() {
	return (
		<section className="text-start ms-3 mt-3">
			<p className="mb-1 fst-italic">LEYENDA:</p>

			<div className="d-flex align-items-center mb-1 gap-2">
				<ImageSeat
					isNormal={true}
					id={`Asiento-disponible-ejemplo`}
					dataId={`Asiento-disponible-ejemplo`}
					interactions={null}
					styleColor={"rgba(0, 0, 0, 0)"}
				/>
				<p className="d-block my-auto">Asiento disponible</p>
			</div>

			<div className="d-flex align-items-center mb-1 gap-2">
				<ImageSeat
					isNormal={true}
					id={`Asiento-ocupado-ejemplo`}
					dataId={`Asiento-ocupado-ejemplo`}
					interactions={null}
					styleColor={"rgba(0, 187, 0, 1)"}
				/>
				<p className="d-block my-auto">Asiento ocupado</p>
			</div>

			<div className="d-flex align-items-center mb-1 gap-2">
				<ImageSeat
					isNormal={true}
					id={`Asiento-ocupado-ejemplo`}
					dataId={`Asiento-ocupado-ejemplo`}
					interactions={null}
					styleColor={"rgb(255, 167, 36)"}
				/>
				<p className="d-block my-auto">Asiento reservado</p>
			</div>

			<div className="d-flex align-items-center mb-1 gap-2">
				<ImageSeat
					isNormal={false}
					id={`Espacio-especial-disponible-ejemplo`}
					dataId={`Espacio-especial-disponible-ejemplo`}
					interactions={null}
					styleColor={"rgba(0, 0, 0, 0)"}
				/>
				<p className="d-block my-auto">Espacio especial disponible</p>
			</div>

			<div className="d-flex align-items-center mb-1 gap-2">
				<ImageSeat
					isNormal={false}
					id={`Espacio-especial-ocupado-ejemplo`}
					dataId={`Espacio-especial-disponible-ejemplo`}
					interactions={null}
					styleColor={"rgba(0, 187, 0, 1)"}
				/>
				<p className="d-block my-auto">Espacio especial ocupado</p>
			</div>
		</section>
	);
}

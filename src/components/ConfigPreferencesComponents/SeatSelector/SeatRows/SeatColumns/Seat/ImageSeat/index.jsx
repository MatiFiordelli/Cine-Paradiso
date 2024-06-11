import React, { memo, useContext, useEffect, useState } from "react";
import SeatSVG from "../../../../../../../assets/svg/cinemaSeat.svg";
import SpecialSeatSVG from "../../../../../../../assets/svg/cinemaSpecialSeat.svg";
import "./index.css";
import { ConfigPreferencesCtx } from "../../../../../../../contexts";

const ImageSeat = ({ isNormal, id, dataId, interactions, styleColor }) => {
  const { filteredHourJSON } = useContext(ConfigPreferencesCtx);
  const [thisSeatReserved, setThisSeatReserved] = useState(false);

  useEffect(() => {
    dataId !== undefined && filteredHourJSON &&
      setThisSeatReserved(() => filteredHourJSON[0].seats[dataId]);
  }, [filteredHourJSON]);

  return (
    <>
      {styleColor && dataId !== undefined && (
        <img
          src={isNormal ? SeatSVG : SpecialSeatSVG}
          className="cinema-seat"
          alt={isNormal ? "Asiento" : "Espacio de accesibilidad"}
          aria-label={isNormal ? "seat" : "accessibility space"}
          id={`${id}`}
          onMouseOver={interactions ? interactions.onMouseOver : () => {}}
          onMouseOut={interactions ? interactions.onMouseOut : () => {}}
          onClick={interactions ? (e) => interactions.handleClick(e) : () => {}}
          style={{
            backgroundColor: thisSeatReserved
              ? "rgb(255, 167, 36)"
              : styleColor,
            pointerEvents: thisSeatReserved ? "none" : "auto",
          }}
        />
      )}
    </>
  );
};

export default memo(ImageSeat);

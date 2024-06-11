import React, { memo, useContext, useEffect, useState } from "react";
import "./index.css";
import { ConfigPreferencesCtx, MatrixCtx } from "../../../../../../contexts";
import ImageSeat from "./ImageSeat";

const Seat = ({ seatType }) => {
  const { seatsDetails } = useContext(ConfigPreferencesCtx);
  const { seatCounterRef } = useContext(MatrixCtx);
  const [seatNumber, setSeatNumber] = useState(null);
  const [isAllowed, setIsAllowed] = useState(false);

  const {
    seatsCodeSelectionArray,
    setSeatsCodeSelectionArray,
    amountAllowedSeats,
  } = useContext(ConfigPreferencesCtx);

  const [styleGreen, setStyleGreen] = useState("rgba(0, 0, 0, 0)");
  const [isPopOverVisible, setIsPopOverVisible] = useState(false);

	useEffect(() => {
		if(seatsDetails){
			seatCounterRef.current += 1;
			seatCounterRef.current > (seatsDetails.totalSeats) && (seatCounterRef.current = 0)
			!seatNumber && setSeatNumber(seatCounterRef.current);
		}
		
	}, [seatsDetails]);

  const handleStyleGreen = (e) => {
    const style = window.getComputedStyle(e.target);
    if (style.backgroundColor === "rgba(0, 0, 0, 0)") {
      if (isAllowed) {
        setStyleGreen("rgba(0, 187, 0, 1)");

        setSeatsCodeSelectionArray((prev) => [...prev, e.target.id]);
      }
    } else {
      setStyleGreen("rgba(0, 0, 0, 0)");

      const arr = [...seatsCodeSelectionArray];
      arr.pop();
      setSeatsCodeSelectionArray([...arr]);
    }
  };

  useEffect(() => {
    const len = seatsCodeSelectionArray.length;
    len < amountAllowedSeats ? setIsAllowed(true) : setIsAllowed(false);
  }, [seatsCodeSelectionArray, amountAllowedSeats]);

  const handleClick = (e) => {
    handleStyleGreen(e);
  };

  return (
    <>
      {seatNumber && (
        <div className="position-relative">
          <span
            className="cinema-popover bg-dark text-light p-1"
            style={{ display: isPopOverVisible ? "block" : "none" }}
            aria-label="seat popover"
          >
            {seatNumber}
          </span>
          {seatType === "normal" ? (
            <ImageSeat
              isNormal={true}
              id={`${seatNumber}`}
              dataId={seatNumber - 1}
              interactions={{
                onMouseOver: () => setIsPopOverVisible(true),
                onMouseOut: () => setIsPopOverVisible(false),
                handleClick: handleClick,
              }}
              styleColor={styleGreen}
            />
          ) : (
            <ImageSeat
              isNormal={false}
              id={`${seatNumber}`}
              dataId={seatNumber - 1}
              interactions={{
                onMouseOver: () => setIsPopOverVisible(true),
                onMouseOut: () => setIsPopOverVisible(false),
                handleClick: handleClick,
              }}
              styleColor={styleGreen}
            />
          )}
        </div>
      )}
    </>
  );
};

export default memo(Seat);

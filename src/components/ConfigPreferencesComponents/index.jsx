import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SliderDates from "./SliderDates";
import HourSelector from "./HourSelector";
import PriceSelector from "./PriceSelector";
import { ConfigPreferencesCtx, PreferencesCtx } from "../../contexts";
import DetailsPreferences from "./DetailsPreferences";
import pathroutes from "../../helpers/pathroutes.js";
import Swal from "sweetalert2";
import urls from "../../helpers/urls";
import { useContext } from "react";

export default function ConfigPreferencesComponent() {
	const urlParams = window.location.search.slice(1)

	const navigate = useNavigate();
	const { preferences, setPreferences } = useContext(PreferencesCtx);

  const [seatSelectorReset, setSeatSelectorReset] = useState(null);
  const DynamicImportSeatSelectorComponent = async () => {
    const SeatSelector = await import("./SeatSelector");
    const ResetComponent = SeatSelector.default;
    setSeatSelectorReset(<ResetComponent />);
  };

  const [fetchedHours, setFetchedHours] = useState(null);
  const [fetchedPrices, setFetchedPrices] = useState(null);
  const [dataPrices, setDataPrices] = useState(null);
  const [amountAllowedSeats, setAmountAllowedSeats] = useState(null);
  const [seatsCodeSelectionArray, setSeatsCodeSelectionArray] = useState([]);
  const [dateSelection, setDateSelection] = useState(null);
  const [hourSelection, setHourSelection] = useState(null);
  const [seatsdateshoursJSON, setSeatsdateshoursJSON] = useState(null);
  const [filteredHourJSON, setFilteredHourJSON] = useState(null);
  const [seatsDetails, setSeatsDetails] = useState(null);

  const getMovieDetails = () => {
    const ST = sessionStorage.getItem("movieSelected");
    if (ST === null) {
      navigate("/");
    } else {
      const id = JSON.parse(ST).id;

      if (id) {
        const urlMovies = urls.urlMovies(id);

        fetch(urlMovies)
          .then((res) => res.json())
          .then((data) => {
            const obj = {
              id: id,
              poster: `${urls.imgs}${data.poster_path}`,
              title: data.original_title,
              certification: data.release_dates.results.filter(
                (e) => e.iso_3166_1 === "US"
              )[0].release_dates[0].certification,
              genres: data.genres.map((e) => e.name),
            };

            sessionStorage.setItem("movieSelected", JSON.stringify(obj));
          });
      }
    }
  };

  const fetchHours = () => {
    fetch("https://api-cine-paradiso.vercel.app/get-hours")
      .then((res) => res.json())
      .then((data) => setFetchedHours(data));
  };

  const fetchPrices = () => {
    fetch("https://api-cine-paradiso.vercel.app/get-prices")
      .then((res) => res.json())
      .then((data) => setFetchedPrices(data));
  };

	const seatsDatesHours = () => {
		fetch("https://api-cine-paradiso.vercel.app/get-seatsdateshourstheaters")
			.then((res) => res.json())
			.then((data) => {
				setSeatsdateshoursJSON(data);
			});
	};

	const checkToRenewAndRemoveOldRecordsTableSeatsdateshours = () => {
		fetch("https://api-cine-paradiso.vercel.app/renew-and-remove-old-records-table-seatsdateshourstheaters")
			.catch((err)=>console.log(err))
	}

	useEffect(() => {
		checkToRenewAndRemoveOldRecordsTableSeatsdateshours();
		fetchHours();
		fetchPrices();
		DynamicImportSeatSelectorComponent();
		getMovieDetails();
		seatsDatesHours();
		
		updatePreferencesObj({ id: urlParams });
	}, []);

  useEffect(() => {
    let obj = null;
    if (fetchedPrices) {
      obj = fetchedPrices.map((e, i) => {
        e.amount = 0;
        e.subTotal = 0;
        return e;
      });
    }

    obj && setDataPrices([...obj]);
  }, [fetchedPrices]);

  useEffect(() => {
    let n = 0;
    if (dataPrices) {
      n = dataPrices.reduce((accum, curr) => {
        return accum + curr.amount;
      }, 0);
    }
    setAmountAllowedSeats(n);
  }, [dataPrices]);

  useEffect(() => {
    setSeatSelectorReset(null);
    DynamicImportSeatSelectorComponent();
    setSeatsCodeSelectionArray([]);
  }, [amountAllowedSeats]);

	const filterHourToGetSeats = () => {
		const filterByMovieId = seatsdateshoursJSON[0].results.filter(e=>e.teather_movie_id===urlParams)

		const dateSelectionString = `${dateSelection.dayNumber}/${dateSelection.monthNumber}`;

		const filteredDateObj = filterByMovieId[0].seatsdateshours.filter(
			(e) => {
				return e.date === dateSelectionString;
			}
		);

    return filteredDateObj[0].schedules.filter((e) => {
      return e.hour === hourSelection;
    });
  };

  useEffect(() => {
    if (hourSelection && dateSelection) {
      setFilteredHourJSON(filterHourToGetSeats());
    }
  }, [hourSelection, dateSelection]);

  useEffect(() => {
    if (filteredHourJSON) {
      const obj = {
        totalSeats: filteredHourJSON[0].seats.length,
        reservedSeatsAmount: filteredHourJSON[0].seats.filter((e) => e === true)
          .length,
      };

      setSeatsDetails(obj);
    }
  }, [filteredHourJSON]);

  const getSumAmountTicket = () => {
    return dataPrices?.reduce((accum, curr) => accum + curr.amount, 0);
  };

  const goToPayments = () => {
    const obj = {
      dateSelection,
      hourSelection,
      dataPrices,
      seatsCodeSelectionArray,
    };
    sessionStorage.setItem("configPreferences", JSON.stringify(obj));

    //acaa!!!!!
    navigate(pathroutes.payments);
  };

	const updatePreferencesObj = (content) => {
		if (preferences) {
			if (content.date)
				setPreferences({
					...preferences,
					date: `${content.date.dayNumber}/${content.date.monthNumber}`,
				});
			if (content.hour)
				setPreferences({ ...preferences, hour: content.hour });
			if (content?.seats?.length > 0)
				setPreferences({ ...preferences, seats: content.seats });
			if (content?.id)
				setPreferences({ ...preferences, id: content.id})
		}
	};

  useEffect(() => {
    updatePreferencesObj({ date: dateSelection });
  }, [dateSelection]);
  useEffect(() => {
    updatePreferencesObj({ hour: hourSelection });
  }, [hourSelection]);
  useEffect(() => {
    updatePreferencesObj({ seats: [...seatsCodeSelectionArray] });
  }, [seatsCodeSelectionArray]);

  return (
    <section className="d-flex flex-column gap-5">
      <ConfigPreferencesCtx.Provider
        value={{
          fetchedHours,
          dataPrices,
          setDataPrices,
          amountAllowedSeats,
          dateSelection,
          setDateSelection,
          hourSelection,
          setHourSelection,
          seatsCodeSelectionArray,
          setSeatsCodeSelectionArray,
          getSumAmountTicket,
          filteredHourJSON,
          setFilteredHourJSON,
          seatsDetails,
        }}
      >
        <SliderDates />
        <HourSelector />

        <PriceSelector />
        {seatSelectorReset}

				<DetailsPreferences />

        <button
          className="btn btn-secondary w-25 m-auto my-5"
          onClick={() => {
            // Remove the check for isAuthenticated here
            if (
              dateSelection &&
              hourSelection &&
              dataPrices &&
              seatsCodeSelectionArray.length === getSumAmountTicket() &&
              seatsCodeSelectionArray.length > 0
            ) {
              goToPayments();
            } else {
              Swal.fire({
                title: "Error!",
                text: "Para continuar, primero se necesita que completes la selección de tus preferencias.",
                icon: "error",
              });
            }
          }}
        >
          IR A PAGAR
        </button>
      </ConfigPreferencesCtx.Provider>
    </section>
  );
}

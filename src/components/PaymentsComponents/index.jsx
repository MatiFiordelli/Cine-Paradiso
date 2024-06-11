import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import { useAuth0 } from "@auth0/auth0-react";
import Card from "./Card/index.jsx";
import Section from "./Section/index.jsx";
import MovieDetails from "./MovieDetails/index.jsx";
import Map from "../ContactComponents/Map/index.jsx";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { PreferencesCtx } from "../../contexts";
import { useContext } from "react";

export default function PaymentsComponent() {
  const [preferenceId, setPreferenceId] = useState(null);
  const [showWallet, setShowWallet] = useState(false);
  const [movieData, setMovieData] = useState(null);
  const [processingPayment, setProcessingPayment] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { preferences } = useContext(PreferencesCtx);

  const sendPreferencesToUpdateTableDBFromPayments = () => {
    // Llama a la función sendPreferencesToUpdateTableDB del primer componente
    if (preferences.date && preferences.hour && preferences.seats.length > 0) {
      fetch("https://api-cine-paradiso.vercel.app/update-seatsdateshours", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(preferences),
      }).catch((err) => alert("Error!"));
    }
  };

  useEffect(() => {
    // Recuperar los datos de sessionStorage al cargar el componente
    const storedMovieData = sessionStorage.getItem("movieSelected");
    if (storedMovieData) {
      const parsedMovieData = JSON.parse(storedMovieData);
      setMovieData(parsedMovieData);
    }
  }, []);

  initMercadoPago("TEST-4ea56c39-5a46-45de-b5f9-494923401c7e", {
    locale: "es-AR",
  });

  const createdPreference = async () => {
    try {
      const idempotencyKey = uuidv4();

      const response = await axios.post(
        "https://servermp.vercel.app/create_preference",
        {
          title: movieData.title,
          quantity: extractedTotalAmount,
          price: extractedTotalPrices,
        },
        {
          headers: {
            "X-Idempotency-Key": idempotencyKey,
          },
        }
      );
      const { id } = response.data;
      return id;
    } catch (error) {
      console.log(error);
    }
  };

  const handleBuy = async () => {
    // Evitar múltiples clics mientras se procesa el pago
    if (processingPayment) return;

    setProcessingPayment(true); // Iniciar el proceso de pago

    const id = await createdPreference();
    if (id) {
      setPreferenceId(id);
      setShowWallet(true);
      sendPreferencesToUpdateTableDBFromPayments(); // Llama a la función para actualizar la base de datos
    }

    setProcessingPayment(false); // Permitir clics nuevamente después de que se complete la solicitud

    if (id) {
      sendPreferencesToUpdateTableDBFromPayments();
    }
  };

  const { isAuthenticated, user, loginWithPopup } = useAuth0();
  const [paymentData, setPaymentData] = useState(null);
  const [userData, setUserData] = useState({
    email: "",
    name: "",
    picture: "",
  });
  const [extractedTotalPrices, setExtractedTotalPrices] = useState([]);
  const [extractedTotalAmount, setExtractedTotalAmount] = useState(0);

  useEffect(() => {
    const storedData = sessionStorage.getItem("configPreferences");

    if (!storedData) {
      Swal.fire({
        title: "No hay datos de película",
        text: "Selecciona una película antes de continuar",
        icon: "info",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "Seleccionar película",
      }).then(() => {
        navigate("/");
      });
    } else {
      const paymentDataParsed = JSON.parse(storedData);
      setPaymentData(paymentDataParsed);
      sessionStorage.setItem("userData", JSON.stringify(user));

      // Guardamos los datos de paymentData en variables separadas
      const dataPrices = paymentDataParsed.dataPrices;

      // Guardamos los datos de dataPrices en una variable aparte
      const amounts = dataPrices.map((price) => price.amount);
      const prices = dataPrices.map((price) => parseFloat(price.price));

      const totalAmount = amounts.reduce((acc, curr) => acc + curr, 0);
      const totalPricePerTicket = prices.map(
        (price, index) => price * amounts[index]
      );
      const totalPrices = totalPricePerTicket.reduce(
        (acc, curr) => acc + curr,
        0
      );

      // Extraer los datos del array totalPrices
      const extractedPrices = totalPrices;
      const extractedAmount = totalAmount;

      // Guardar los datos extraídos en una variable de estado
      setExtractedTotalPrices(extractedPrices);
      setExtractedTotalAmount(extractedAmount);
    }
  }, [isAuthenticated, navigate, location]);

  useEffect(() => {
    const fetchUserData = () => {
      if (user) {
        setUserData({
          email: user.email,
          name: user.name,
          picture: user.picture,
        });
      }
    };
    fetchUserData();
  }, [user]);

  useEffect(() => {
    // Almacenar la ubicación actual antes de iniciar sesión si el usuario no está autenticado
    if (!isAuthenticated) {
      sessionStorage.setItem("returnUrl", location.pathname);
      handleLoginAndRedirect();
    }
  }, [isAuthenticated, location.pathname]);

  const handleLoginAndRedirect = async () => {
    try {
      await loginWithPopup();
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
    }
  };

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div>
      <h1 className="text-center mb-5">Proceso de Pago</h1>
      <div className="container py-5">
        <Card>
          <div className="card-body">
            <div className="row">
              <div className="col-md-6">
                <Section
                  title="Datos del Usuario"
                  className="border-bottom pb-3"
                >
                  <div className="bg-light p-3">
                    {userData.picture && (
                      <p>
                        <strong></strong>
                        <br />
                        <img
                          src={userData.picture}
                          alt="User"
                          style={{ maxWidth: "150px", borderRadius: "50%" }}
                        />
                      </p>
                    )}
                    <p>
                      <strong>Nombre:</strong> {userData.name}
                    </p>
                    <p>
                      <strong>Email:</strong> {userData.email}
                    </p>
                  </div>
                </Section>
                <Section
                  title="Película Seleccionada"
                  className="border-bottom pb-3"
                >
                  <div className="bg-light p-3">
                    <MovieDetails />
                  </div>
                </Section>
                <Section
                  title="Resumen de Compra"
                  className="border-bottom pb-3"
                >
                  <div className="bg-light p-3">
                    {paymentData && (
                      <>
                        <p>
                          <strong>Fecha Seleccionada:</strong>{" "}
                          {paymentData.dateSelection.dayName},{" "}
                          {paymentData.dateSelection.dayNumber} de{" "}
                          {paymentData.dateSelection.monthName}
                        </p>
                        <p>
                          <strong>Horario Seleccionado:</strong>{" "}
                          {paymentData.hourSelection}
                        </p>
                        <p>
                          <strong>Cantidad de Tickets:</strong>{" "}
                          {paymentData.dataPrices.reduce(
                            (accum, curr) => accum + curr.amount,
                            0
                          )}
                        </p>
                        <p>
                          <strong>Asientos Seleccionados:</strong>{" "}
                          {paymentData.seatsCodeSelectionArray.length > 5
                            ? paymentData.seatsCodeSelectionArray
                                .slice(0, 3)
                                .join(", ") + "..."
                            : paymentData.seatsCodeSelectionArray.join(", ")}
                        </p>
                        <p>
                          <strong>Precio Total:</strong> ${extractedTotalPrices}
                        </p>
                      </>
                    )}
                  </div>
                </Section>
              </div>
              <div className="col-md-6">
                <Map style={{ height: "250px" }} />
                <Section
                  title="¡Atención!"
                  className="border rounded p-3 bg-warning mt-4 pb-4"
                >
                  <p className="mb-3">
                    Permitimos a nuestros clientes traer alimentos y bebidas
                    comprados fuera del cine, sin embargo, también ofrecemos una
                    variedad de opciones de comida y bebida en nuestras
                    instalaciones.
                  </p>
                  <p className="mb-3">
                    Algunas películas pueden contener flashes que pueden afectar
                    a personas con epilepsia fotosensible.
                  </p>

                  <p className="mb-0">
                    La aceptación de estos términos se da al realizar el pago
                    del ticket.
                  </p>
                </Section>
              </div>
            </div>
            <div className="text-center mt-5">
              <button
                onClick={handleBuy}
                className="rounded-pill px-4 py-2 btn-secondary"
              >
                GENERAR BOTON DE PAGO
              </button>
              {showWallet && (
                <Wallet initialization={{ preferenceId: preferenceId }} />
              )}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

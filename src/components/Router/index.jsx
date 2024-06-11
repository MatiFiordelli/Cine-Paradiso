import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../../Pages/Home/index.jsx/";
import Contact from "../../Pages/Contact";
import Login from "../../Pages/Login";
import MovieDetails from "../../Pages/MovieDetails";
import AboutUs from "../../Pages/AboutUs";
import Payments from "../../Pages/Payments";
import Error404 from "../../Pages/Error404";
import Error401 from "../../Pages/Error401";
import ConfigPreferences from "../../Pages/ConfigPreferences";
import Prices from "../../Pages/Prices";
import FAQ from "../../Pages/FAQ";
import pathroutes from "../../helpers/pathroutes.js";
import Logout from "../LoginComponents/Logout/index.jsx";
import TermsAndConditions from "../TermsAndConditionsComponents";
import PrivacyPolicies from "../../Pages/PrivacyPolicies";
export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path={`${pathroutes.details}:id`} element={<MovieDetails />} />
      <Route path={pathroutes.login} element={<Login />} />
      <Route path={pathroutes.contact} element={<Contact />} />
      <Route
        path={pathroutes.config_preferences}
        element={<ConfigPreferences />}
      />
      <Route path={pathroutes.about_us} element={<AboutUs />} />
      <Route path={pathroutes.payments} element={<Payments />} />
      <Route path={pathroutes.prices} element={<Prices />} />
      <Route path={pathroutes.faq} element={<FAQ />} />
      <Route path={pathroutes.logout} element={<Logout />} />{" "}
      <Route
        path={pathroutes.terms_and_conditions}
        element={<TermsAndConditions />}
      />{" "}
      <Route path={`${pathroutes.details}undefined`} element={<Error404 />} />
      <Route path="*" element={<Error404 />} />
      {/* Modificar luego la siguiente ruta acorde a las rutas protegidas */}
      {/* --------------------------------------------------------------- */}
      <Route path={`${pathroutes.error401}`} element={<Error401 />} />
      <Route path={pathroutes.privacy_policies} element={<PrivacyPolicies />} />
    </Routes>
  );
}

// import React from "react";
// import { Routes, Route, Navigate } from "react-router-dom";
// import Home from "../../Pages/Home/index.jsx/";
// import Contact from "../../Pages/Contact";
// import Login from "../../Pages/Login";
// import MovieDetails from "../../Pages/MovieDetails";
// import AboutUs from "../../Pages/AboutUs";
// import Payments from "../../Pages/Payments";
// import Error404 from "../../Pages/Error404";
// import Error401 from "../../Pages/Error401";
// import ConfigPreferences from "../../Pages/ConfigPreferences";
// import Prices from "../../Pages/Prices";
// import FAQ from "../../Pages/FAQ";
// import pathroutes from "../../helpers/pathroutes.js";
// import Logout from "../LoginComponents/Logout/index.jsx";
// import TermsAndConditions from "../TermsAndConditionsComponents";
// import { useAuth } from "../../contexts/AuthContext/index.jsx"; // Importa el contexto de autenticación

// export default function Router() {
//   const { isAuthenticated } = useAuth(); // Obtiene la función isAuthenticated del contexto de autenticación

//   const ProtectedRoute = ({ element, ...props }) => {
//     return isAuthenticated() ? (
//       element
//     ) : (
//       <Navigate to="/error401" replace state={{ from: props.location }} />
//     );
//   };

//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path={`${pathroutes.details}:id`} element={<MovieDetails />} />
//       <Route path={pathroutes.login} element={<Login />} />
//       <Route path={pathroutes.contact} element={<Contact />} />
//       <Route
//         path={pathroutes.config_preferences}
//         element={<ProtectedRoute element={<ConfigPreferences />} />}
//       />
//       <Route path={pathroutes.about_us} element={<AboutUs />} />
//       <Route
//         path={pathroutes.payments}
//         element={<ProtectedRoute element={<Payments />} />}
//       />
//       <Route path={pathroutes.prices} element={<Prices />} />
//       <Route path={pathroutes.faq} element={<FAQ />} />
//       <Route path={pathroutes.logout} element={<Logout />} />
//       <Route
//         path={pathroutes.terms_and_conditions}
//         element={<TermsAndConditions />}
//       />
//       <Route path={`${pathroutes.details}undefined`} element={<Error404 />} />
//       <Route path="*" element={<Error404 />} />
//       <Route path={pathroutes.error401} element={<Error401 />} />
//     </Routes>
//   );
// }

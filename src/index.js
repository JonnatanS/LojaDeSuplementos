import React from "react";
import { createRoot } from "react-dom/client";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import App from "./react-router/App";
import Contact from "./routes/Contact";
import ErrorPage from "./routes/ErrorPage";
import ContactDetails from "./routes/ContactDetails";
import LoginPage from "./Frontend/login-js/Login";
import HomePage from "./pag-principal/App";
import Cadastro from "./Frontend/cadastro-js/cadastro";
import Logado from "./pag-logado/index";

import Paypal from "./components/paypal";
import ProductDetail from "./pag-logado/ProductDetail";

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="contact" element={<Contact />} />
          <Route path="contact/:id" element={<ContactDetails />} />
          <Route path="oldcontact" element={<Navigate to="/contact" />} />
          <Route path="homepage" element={<HomePage />} />
          <Route path="loginpage" element={<LoginPage />} />
          <Route path="cadastro" element={<Cadastro />} />
          <Route path="homepagelog" element={<Logado />} />
          <Route path="pagamento" element={<Paypal />} />
          <Route path="/detalhes/id/:productId" element={<ProductDetail />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

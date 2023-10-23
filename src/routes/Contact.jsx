import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "../Frontend/login-js/Login";
import Cadastro from "../Frontend/cadastro-js/cadastro";
import Pagina404 from "../routes/ErrorPage";
import PaginaPrincipal from "../pag-principal/App";
import { Logado } from "../pag-logado/imports";

import Paypal from "../components/paypal";
import ProductDetail from "../pag-logado/ProductDetail";

function Contact() {
  return (
    <Router>
      <Routes>
        <Route path="/loginpage" component={LoginPage} />
        <Route path="/cadastro" component={Cadastro} />
        <Route path="/server" component={Pagina404} />
        <Route path="/homepage" component={PaginaPrincipal} />
        <Route path="/homepageLog" component={Logado} />
        <Route path="/pagamento" component={Paypal} />
        <Route path="/detalhes/:id" component={ProductDetail} />
      </Routes>
    </Router>
  );
}

export default Contact;

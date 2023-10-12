import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <p>
        <Link to="/homepage">Pagina Principal</Link>
      </p>
      <p>
        <Link to="/loginpage">Pagina de Login</Link>
      </p>
      <p>
        <Link to="/cadastro">Pagina de Cadastro</Link>
      </p>
      <p>
        <Link to="/server">Pagina de Erro 404</Link>
      </p>
    </div>
  );
};

export default Contact;

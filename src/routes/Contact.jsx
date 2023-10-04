import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <h1></h1>
      {/* nested routes */}
      <p>
        <Link to="/homepage">Pagina Principal</Link>
      </p>
      <p>
        <Link to="/loginpage">Pagina de Login</Link>
      </p>
    </div>
  );
};

export default Contact;

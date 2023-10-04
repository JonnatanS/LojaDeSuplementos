import { Link } from "react-router-dom";
import "../components/NavBar.css";

const NavBar = () => {
  return (
    <nav>
      <Link to="/"></Link>
      <Link to="/contact"></Link>
    </nav>
  );
};

export default NavBar;

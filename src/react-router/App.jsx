import "../react-router/App.css";

//Reaproveitamento de estrutura
import { Outlet } from "react-router-dom";

// Navegando entre links
import NavBar from "../components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <h1>React Router</h1>
      <Outlet />
      <p>Footer</p>
    </div>
  );
}

export default App;

import "../react-router/App.css";

//Reaproveitamento de estrutura
import { Outlet } from "react-router-dom";

// Navegando entre links

function App() {
  return (
    <div className="App">
      <Outlet />
      <p></p>
    </div>
  );
}

export default App;

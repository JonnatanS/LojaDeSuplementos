import { Link } from "react-router-dom";
import React from "react";
import Gym from "../arquivo svg/Gym-amico.svg";
import "../css-login/Login.css";

function Login() {
  return (
    <div className="main-login">
      <div className="left-login">
        <h1>
          Faça login <br />E entre para a nossa equipe
        </h1>
        <img src={Gym} className="left-login-image" alt="Gym" />
        <br />
      </div>
      <div className="right-login">
        <div className="card-login">
          <h1>LOGIN</h1>
          <div className="textfield">
            <label htmlFor="usuario">Usuário</label>
            <input type="text" name="usuario" placeholder="Usuário" />
          </div>
          <div className="textfield">
            <label htmlFor="senha">Senha</label>
            <input type="password" name="senha" placeholder="Senha" />
          </div>
          <button className="btn-login">
            <Link to="/">Login</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;

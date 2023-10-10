import { Link } from "react-router-dom";
import React from "react";
import Fitness from "../css-cadastro/fitness.svg";

import "../css-cadastro/style.css";

function Login() {
  return (
    <div className="main-login">
      <div className="left-login">
        <h1>
          Crie uma conta <br /> e junte-se a nós!
        </h1>
        <img src={Fitness} className="left-login-image" alt="Gym" />
        <br />
      </div>
      <div className="right-login">
        <div className="card-login">
          <h1>Cadastro</h1>
          <div className="textfield">
            <label htmlFor="usuario">Nome Completo</label>
            <input type="text" name="nome" placeholder="Nome" />
          </div>
          <div className="textfield">
            <label htmlFor="usuario">Usuário</label>
            <input type="text" name="usuario" placeholder="Usuário" />
          </div>
          <div className="textfield">
            <label htmlFor="usuario">Data de Nascimento</label>
            <input type="date" name="data_nasc" placeholder="nascimento" />
          </div>
          <div className="textfield">
            <label htmlFor="usuario">E-mail</label>
            <input type="email" name="email" placeholder="E-mail" />
          </div>
          <div className="textfield">
            <label htmlFor="senha">Senha</label>
            <input type="password" name="senha" placeholder="Senha" />
          </div>
          <button className="btn-login">
            <Link to="/loginpage">Confirmar</Link>
            <div className="btn-cadastre"></div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;

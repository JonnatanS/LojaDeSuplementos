import React, { useState } from "react";
import Fitness from "../css-cadastro/fitness.svg";
import Axios from "axios";
import "../css-cadastro/style.css";
import { useNavigate } from "react-router-dom";

function Cadastro() {
  const navigate = useNavigate();

  const [cadastroConcluido, setCadastroConcluido] = useState(false);
  const [email, setEmail] = useState("");
  const [nome, setNome] = useState("");
  const [usuario, setUsuario] = useState("");
  const [dataNasc, setDataNasc] = useState("");
  const [senha, setSenha] = useState("");
  const [nomePreenchido, setNomePreenchido] = useState(false);
  const [emailPreenchido, setEmailPreenchido] = useState(false);
  const [senhaPreenchido, setSenhaPreenchido] = useState(false);
  const [usuarioPreenchido, setUsuarioPreenchido] = useState(false);
  const [dataNascPreenchido, setDataNascPreenchido] = useState(false);
  // Adicione estados semelhantes para outros campos obrigatórios

  const handleNameChange = (event) => {
    setNome(event.target.value);
    setNomePreenchido(!!event.target.value); // Define para verdadeiro se o campo não estiver vazio
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setEmailPreenchido(!!event.target.value); // Define para verdadeiro se o campo não estiver vazio
  };

  const handleDataNascChange = (event) => {
    setDataNasc(event.target.value);
    setDataNascPreenchido(!!event.target.value); // Define para verdadeiro se o campo não estiver vazio
  };
  const handleUsuarioChange = (event) => {
    setUsuario(event.target.value);
    setUsuarioPreenchido(!!event.target.value); // Define para verdadeiro se o campo não estiver vazio
  };

  const handleSenhaChange = (event) => {
    setSenha(event.target.value);
    setSenhaPreenchido(!!event.target.value); // Define para verdadeiro se o campo não estiver vazio
  };

  // Adicione manipuladores semelhantes para outros campos obrigatórios

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Valide se os campos obrigatórios estão preenchidos
    if (!nomePreenchido || !emailPreenchido) {
      alert("Preencha todos os campos obrigatórios.");
      return;
    }

    if (!dataNascPreenchido || !senhaPreenchido) {
      alert("Preencha todos os campos obrigatórios.");
      return;
    }

    if (!usuarioPreenchido) {
      alert("Preencha todos os campos obrigatórios.");
      return;
    }

    // Se a validação passar, continue com o envio para o MySQL
    Axios.post("http://localhost:3001/register", {
      nome,
      usuario,
      data_nasc: dataNasc,
      email,
      senha,
    }).then((response) => {
      console.log(response);
      setCadastroConcluido(true);

      navigate("/loginpage");
    });
  };

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
            <input
              type="text"
              name="nome"
              placeholder="Nome"
              onChange={handleNameChange}
            />
          </div>
          <div className="textfield">
            <label htmlFor="usuario">Usuário</label>
            <input
              type="text"
              name="usuario"
              placeholder="Usuário"
              onChange={handleUsuarioChange}
            />
          </div>
          <div className="textfield">
            <label htmlFor="usuario">Data de Nascimento</label>
            <input
              type="date"
              name="data_nasc"
              placeholder="nascimento"
              onChange={handleDataNascChange}
            />
          </div>
          <div className="textfield">
            <label htmlFor="usuario">E-mail</label>
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              onChange={handleEmailChange}
              required
            />
          </div>
          <div className="textfield">
            <label htmlFor="senha">Senha</label>
            <input
              type="password"
              name="senha"
              placeholder="Senha"
              onChange={handleSenhaChange}
            />
          </div>
          <button onClick={handleFormSubmit} className="btn-login">
            <div className="btn-cadastre">Confirmar</div>
          </button>
        </div>
        {cadastroConcluido && <div>Cadastro Concluído!</div>}
      </div>
    </div>
  );
}

export default Cadastro;

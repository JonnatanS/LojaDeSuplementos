import { Link, useNavigate } from "react-router-dom";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import React from "react";
import Gym from "../arquivo svg/Gym-amico.svg";
import "../css-login/Login.css";
import Axios from "axios";

function Login() {
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    senha: "",
  };

  const validationSchema = yup.object().shape({
    email: yup.string().required("E-mail é obrigatório"),
    senha: yup
      .string()
      .min(8, "A senha tem que ter no mínimo  8(oito) caracteres")
      .required("Senha é obrigatória"),
  });

  const handleClickLogin = (values) => {
    Axios.post("http://localhost:3001/login", {
      email: values.email,
      senha: values.senha,
    })
      .then((response) => {
        if (response.data.msg === "Usuário logado com sucesso") {
          // Login bem-sucedido, redirecione para a página restrita
          navigate("/homepagelog");
          console.log(response.data.msg);
        } else {
          // Login falhou, mostre uma mensagem de erro
          alert("E-mail ou senha incorretos");
        }
      })
      .catch((error) => {
        // Erro na solicitação, por exemplo, problemas de rede
        alert("Ocorreu um erro na solicitação: " + error.message);
      });
  };

  return (
    <div className="main-login">
      <div className="left-login">
        <h1>
          Entre Agora
          <br />
        </h1>
        <img src={Gym} className="left-login-image" alt="Gym" />
        <br />
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleClickLogin}
      >
        <Form className="right-login">
          <div className="right-login">
            <div className="card-login">
              <h1>LOGIN</h1>
              <div className="textfield">
                <label htmlFor="email">Email</label>
                <Field
                  type="email"
                  name="email"
                  placeholder="Email"
                  autoComplete="username"
                />
                <ErrorMessage name="email" component="span" />
              </div>
              <div className="textfield">
                <label htmlFor="senha">Senha</label>
                <Field
                  type="password"
                  name="senha"
                  placeholder="Senha"
                  autoComplete="current-password"
                />
                <ErrorMessage name="senha" component="span" />
              </div>
              <button className="btn-login" type="submit">
                Entrar
                <div className="btn-cadastre">
                  Não tem uma conta? <Link to="/cadastro">Cadastre-se</Link>
                </div>
              </button>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default Login;

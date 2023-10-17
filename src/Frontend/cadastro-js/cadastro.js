import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import Fitness from "../css-cadastro/fitness.svg";
import Axios from "axios";
import "../css-cadastro/style.css";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";

function Cadastro() {
  const navigate = useNavigate();
  const [setUserExists] = useState(false);

  const validationSchema = yup.object().shape({
    nome: yup.string().required("Nome é obrigatório"),
    usuario: yup.string().required("Usuário é obrigatório"),
    data_nasc: yup.date().required("Data de nascimento é obrigatória"),
    email: yup
      .string()
      .email("E-mail inválido")
      .required("E-mail é obrigatório"),
    senha: yup
      .string()
      .min(8, "A senha deve ter pelo menos 8 caracteres")
      .required("Senha é obrigatória"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("senha"), null], "As senhas não são iguais"),
  });

  const handleFormSubmit = (values) => {
    Axios.post("http://localhost:3001/register", values)
      .then((response) => {
        if (response.data.userExists) {
          alert("Esse E-mail já está cadastrado!");
          // Usuário já existe, exiba uma mensagem de aviso
          setUserExists(true);
        } else {
          alert("Cadastro Concluído!");
          // Usuário não existe, continue com o cadastro
          navigate("/loginpage");
          console.log(response.data.msg);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="main-login">
      <div className="left-login">
        <h1>
          Crie uma conta <br /> e junte-se a nós!
        </h1>
        <img src={Fitness} className="left-login-image" alt="Gym" />
      </div>
      <Formik
        initialValues={{
          nome: "",
          usuario: "",
          data_nasc: "",
          email: "",
          senha: "",
          confirmPassword: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleFormSubmit}
      >
        <Form className="right-login">
          <div className="right-login">
            <div className="card-login">
              <div className="textfield">
                <label htmlFor="nome">Nome Completo</label>
                <Field type="text" name="nome" placeholder="Nome" />
                <ErrorMessage name="nome" component="div" className="error" />
              </div>
              <div className="textfield">
                <label htmlFor="usuario">Usuário</label>
                <Field type="text" name="usuario" placeholder="Usuário" />
                <ErrorMessage
                  name="usuario"
                  component="div"
                  className="error"
                />
              </div>
              <div className="textfield">
                <label htmlFor="data_nasc">Data de Nascimento</label>
                <Field
                  type="date"
                  name="data_nasc"
                  placeholder="Data de Nascimento"
                />
                <ErrorMessage
                  name="data_nasc"
                  component="div"
                  className="error"
                />
              </div>
              <div className="textfield">
                <label htmlFor="email">E-mail</label>
                <Field
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  autoComplete="username"
                />
                <ErrorMessage name="email" component="div" className="error" />
              </div>
              <div className="textfield">
                <label htmlFor="senha">Senha</label>
                <Field
                  type="password"
                  name="senha"
                  placeholder="Senha"
                  autoComplete="current-password"
                />
                <ErrorMessage name="senha" component="div" className="error" />
              </div>
              <div className="textfield">
                <label htmlFor="senha">Confirme a Senha</label>
                <Field
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirmar a senha"
                  autoComplete="current-password"
                />
                <ErrorMessage
                  name="confirmPassword"
                  component="div"
                  className="error"
                />
              </div>
              <button type="submit" className="btn-login">
                <div className="btn-cadastre">Confirmar</div>
              </button>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default Cadastro;

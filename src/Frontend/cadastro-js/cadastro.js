// import React, { useState } from "react";
// import { Formik, Field, Form, ErrorMessage } from "formik";
// import Fitness from "../css-cadastro/fitness.svg";
// import Axios from "axios";
// import "../css-cadastro/style.css";
// import { useNavigate } from "react-router-dom";
// import * as yup from "yup";

// function Cadastro() {
//   const navigate = useNavigate();
//   const [cadastroConcluido, setCadastroConcluido] = useState(false);
//   const [email] = useState("");
//   const [nome] = useState("");
//   const [usuario] = useState("");
//   const [dataNasc] = useState("");
//   const [senha] = useState("");
//   const [nomePreenchido] = useState(false);
//   const [emailPreenchido] = useState(false);
//   const [senhaPreenchido] = useState(false);
//   const [usuarioPreenchido] = useState(false);
//   const [dataNascPreenchido] = useState(false);

//   //yup
//   const validationSchema = yup.object().shape({
//     nome: yup.string().required("Nome é obrigatório"),
//     usuario: yup.string().required("Usuário é obrigatório"),
//     data_nasc: yup.date().required("Data de nascimento é obrigatória"),
//     email: yup
//       .string()
//       .email("E-mail inválido")
//       .required("E-mail é obrigatório"),
//     senha: yup
//       .string()
//       .min(8, "A senha tem que ter no mínimo 8(oito) caractéres")
//       .required("Senha é obrigatória"),
//     confirmPassword: yup
//       .string()
//       .oneOf([yup.ref("password", [null], "As senhas não são iguais")]),
//   });

//   // const handleNameChange = (event) => {
//   //   setNome(event.target.value);
//   //   setNomePreenchido(!!event.target.value); // Define para verdadeiro se o campo não estiver vazio
//   // };

//   // const handleEmailChange = (event) => {
//   //   setEmail(event.target.value);
//   //   setEmailPreenchido(!!event.target.value); // Define para verdadeiro se o campo não estiver vazio
//   // };

//   // const handleDataNascChange = (event) => {
//   //   setDataNasc(event.target.value);
//   //   setDataNascPreenchido(!!event.target.value); // Define para verdadeiro se o campo não estiver vazio
//   // };
//   // const handleUsuarioChange = (event) => {
//   //   setUsuario(event.target.value);
//   //   setUsuarioPreenchido(!!event.target.value); // Define para verdadeiro se o campo não estiver vazio
//   // };

//   // const handleSenhaChange = (event) => {
//   //   setSenha(event.target.value);
//   //   setSenhaPreenchido(!!event.target.value); // Define para verdadeiro se o campo não estiver vazio
//   // };

//   // Adicione manipuladores semelhantes para outros campos obrigatórios

//   const handleFormSubmit = (event) => {
//     event.preventDefault();

//     // // Valide se os campos obrigatórios estão preenchidos
//     // if (!nomePreenchido || !emailPreenchido) {
//     //   alert("Preencha todos os campos obrigatórios.");
//     //   return;
//     // }

//     // if (!dataNascPreenchido || !senhaPreenchido) {
//     //   alert("Preencha todos os campos obrigatórios.");
//     //   return;
//     // }

//     // if (!usuarioPreenchido) {
//     //   alert("Preencha todos os campos obrigatórios.");
//     //   return;
//     // }

//     //alert("Cadasto Concluido!");
//     //navigate("/loginpage");
//     // Se a validação passar, continue com o envio para o MySQL
//     Axios.post("http://localhost:3001/register", {
//       nome,
//       usuario,
//       data_nasc: dataNasc,
//       email,
//       senha,
//     }).then((response) => {
//       //navigate("/loginpage");
//       console.log(response);

//       setCadastroConcluido(true);
//     });
//   };

//   return (
//     <div className="main-login">
//       <div className="left-login">
//         <h1>
//           Crie uma conta <br /> e junte-se a nós!
//         </h1>
//         <img src={Fitness} className="left-login-image" alt="Gym" />
//       </div>
//       <Formik
//         initialValues={{
//           nome: "",
//           usuario: "",
//           data_nasc: "",
//           email: "",
//           senha: "",
//         }}
//         validationSchema={validationSchema}
//         onSubmit={handleFormSubmit}
//       >
//         <Form className="right-login">
//           <div className="right-login">
//             <div className="card-login">
//               <h1>Cadastro</h1>

//               <div className="textfield">
//                 <label htmlFor="nome">Nome Completo</label>
//                 <Field type="text" name="nome" placeholder="Nome" />
//                 <ErrorMessage name="nome" component="div" className="error" />
//               </div>
//               <div className="textfield">
//                 <label htmlFor="usuario">Usuário</label>
//                 <Field type="text" name="usuario" placeholder="Usuário" />
//                 <ErrorMessage
//                   name="usuario"
//                   component="div"
//                   className="error"
//                 />
//               </div>
//               <div className="textfield">
//                 <label htmlFor="data_nasc">Data de Nascimento</label>
//                 <Field
//                   type="date"
//                   name="data_nasc"
//                   placeholder="Data de Nascimento"
//                 />
//                 <ErrorMessage
//                   name="data_nasc"
//                   component="div"
//                   className="error"
//                 />
//               </div>
//               <div className="textfield">
//                 <label htmlFor="email">E-mail</label>
//                 <Field type="email" name="email" placeholder="E-mail" />
//                 <ErrorMessage name="email" component="div" className="error" />
//               </div>
//               <div className="textfield">
//                 <label htmlFor="senha">Senha</label>
//                 <Field type="password" name="senha" placeholder="Senha" />
//                 <ErrorMessage name="senha" component="div" className="error" />
//               </div>
//               <div className="textfield">
//                 <label htmlFor="senha">Confirme a Senha</label>
//                 <Field
//                   type="password"
//                   name="senha"
//                   placeholder="Confirmar a senha"
//                 />
//                 <ErrorMessage name="senha" component="div" className="error" />
//               </div>
//               <button
//                 onClick={handleFormSubmit}
//                 type="submit"
//                 className="btn-login"
//               >
//                 <div className="btn-cadastre">Confirmar</div>
//               </button>
//             </div>
//           </div>
//         </Form>
//       </Formik>
//     </div>
//   );
// }
// export default Cadastro;
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

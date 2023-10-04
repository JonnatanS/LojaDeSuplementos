import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./react-router/App";
import reportWebVitals from "./reportWebVitals";

// Configurando router

import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import Home from "./routes/Home";
import Contact from "./routes/Contact";
import ErrorPage from "./routes/ErrorPage";
import ContactDetails from "./routes/ContactDetails";
import LoginPage from "./Frontend/login-js/Login";
import HomePage from "./pag-principal/App";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//   },
//   {
//     path: "contact",
//     element: <Contact />,
//   },
// ]);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    //Pagina de Erro
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      // nested routes - indentificador unico - dynamic routes
      {
        path: "/contact/:id",
        element: <ContactDetails />,
      },
      // navigate para paginas nao existentes
      {
        path: "oldcontact",
        element: <Navigate to="/contact" />,
      },
      {
        path: "/loginpage",
        element: <LoginPage />,
      },
      {
        path: "/homepage",
        element: <HomePage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

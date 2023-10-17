const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database: "db_cadastros",
});

app.use(cors());
app.use(express.json());

//Login e Cadastro
app.post("/register", (req, res) => {
  const { nome, usuario, data_nasc, email, senha } = req.body;

  db.query("SELECT * FROM usuarios WHERE email = ?", [email], (err, result) => {
    if (err) {
      res.send(err);
    }

    if (result.length === 0) {
      db.query(
        "INSERT INTO usuarios (nome, usuario, data_nasc, email, senha) VALUES (?,?,?,?,?)",
        [nome, usuario, data_nasc, email, senha],
        (err, response) => {
          if (err) {
            res.send(err);
          }

          res.send({ userExists: false, msg: "Usuário cadastrado!" });
        }
      );
    } else {
      res.send({ userExists: true, msg: "Usuário já cadastrado!" });
    }
  });
});

app.post("/login", (req, res) => {
  const { email, senha } = req.body;

  db.query(
    "SELECT * FROM usuarios WHERE email = ? AND senha = ?",
    [email, senha],
    (err, result) => {
      if (err) {
        res.send(err);
      }
      if (result.length > 0) {
        res.send({ msg: "Usuário logado com sucesso" });
      } else {
        res.send({ msg: "Usuário não encontrado" });
      }
    }
  );
});

//------------------------------------------------------------------------------//

//Produtos
app.post("/addProduct", (req, res) => {
  const { categoria, nome, quantidade, preco } = req.body;

  db.query(
    "INSERT INTO produtos (categoria, nome, quantidade, preco) VALUES (?,?,?,?)",
    [categoria, nome, quantidade, preco],
    (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.send({ msg: "Produto adicionado com sucesso" });
      }
    }
  );
});

app.get("/getProducts", (req, res) => {
  db.query("SELECT * FROM produtos", (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(3001, () => {
  console.log("Rodando servidor");
});

const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const axios = require("axios");
const fs = require("fs");

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
  console.log("Recebida uma solicitação POST para /register");
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
// Rota para adicionar os produtos ao banco de dados
app.post("/addProduct", (req, res) => {
  const { carrinho } = req.body;

  for (const produto of carrinho) {
    const valor_total = produto.quantidade * produto.preco;

    const sql =
      "INSERT INTO produtos (nome, categoria, quantidade, preco, imagem, descricao, valor_total) VALUES (?, ?, ?, ?, ?, ?, ?)";
    const values = [
      produto.nome,
      produto.categoria,
      produto.quantidade,
      produto.preco,
      produto.imagem,
      produto.descricao,
      valor_total,
    ];

    db.query(sql, values, (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
      } else {
        // Produto adicionado com sucesso
      }
    });
  }

  res.json({ message: "Produtos adicionados com sucesso" });
});
app.get("/getProducts", (req, res) => {
  db.query("SELECT * FROM produtos", (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: err.message });
    } else {
      res.json(result);
    }
  });
});

app.listen(3001, () => {
  console.log("Servidor rodando na porta 3001");
});

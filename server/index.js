const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database: "telacadastro",
});

app.use(cors());
app.use(express.json());

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

// app.get("/getCards", (req, res) => {
//   let SQL = "SELECT * FROM usuarios";

//   db.query(SQL, (err, result) => {
//     if (err) console.log(err);
//     else res.send(res);
//   });
// });

app.listen(3001, () => {
  console.log("Rodando servidor");
});

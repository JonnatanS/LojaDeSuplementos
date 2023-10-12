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
  const { nome } = req.body;
  const { usuario } = req.body;
  const { data_nasc } = req.body;
  const { email } = req.body;
  const { senha } = req.body;

  let SQL =
    "INSERT INTO usuarios ( nome, usuario, data_nasc, email, senha ) VALUES (?,?,?,?,?)";

  db.query(SQL, [nome, usuario, data_nasc, email, senha], (err, result) => {
    console.log(err);
  });
});

app.get("/getCards", (req, res) => {
  let SQL = "SELECT * FROM usuarios";

  db.query(SQL, (err, result) => {
    if (err) console.log(err);
    else res.send(result);
  });
});

app.listen(3001, () => {
  console.log("Rodando servidor");
});

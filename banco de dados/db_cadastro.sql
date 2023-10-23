CREATE DATABASE db_cadastros;
use db_cadastros;

CREATE TABLE  IF NOT EXISTS usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    usuario VARCHAR(50) NOT NULL,
    data_nasc DATE,
    email VARCHAR(255) NOT NULL,
    senha VARCHAR(255) NOT NULL
);

SELECT * FROM usuarios;

CREATE TABLE produtos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    categoria VARCHAR(255),
    quantidade INT NOT NULL,
    preco DECIMAL(10,2) NOT NULL,
    valor_total DECIMAL(10,2),
    imagem VARCHAR(255),
    descricao TEXT
);

SELECT * FROM produtos;
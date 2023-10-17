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

CREATE TABLE IF NOT EXISTS produtos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    categoria VARCHAR(50) NOT NULL,
    quantidade INT NOT NULL DEFAULT 1,
    preco DECIMAL(10,2) NOT NULL
);

INSERT INTO produtos(nome, categoria, preco) VALUES ('Whey Protein', 'Proteina', 98.99);
INSERT INTO produtos(nome, categoria, preco) VALUES ('OMEGA 3', 'Linha Clinical', 60.00);
INSERT INTO produtos(nome, categoria, preco) VALUES ('BCAA', 'Aminoácidos', 40.00);
INSERT INTO produtos(nome, categoria, preco) VALUES ('Cafeina', 'Termogênicos', 80.00);
INSERT INTO produtos(nome, categoria, preco) VALUES ('Glutamina', 'Aminoácidos', 60.00);
INSERT INTO produtos(nome, categoria, preco) VALUES ('Creatina', 'Suplemento', 79.90);
INSERT INTO produtos(nome, categoria, preco) VALUES ('Barra com Whey Protein (Barra)', 'Proteína', 59.40);
INSERT INTO produtos(nome, categoria, preco) VALUES ('Albumina', 'Proteína', 65.00);


SELECT * FROM produtos;

CREATE TABLE IF NOT EXISTS compras (
    id INT AUTO_INCREMENT PRIMARY KEY,
    data_compra TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    total DECIMAL(10,2) NOT NULL
);

CREATE TABLE IF NOT EXISTS itens_compra (
    id INT AUTO_INCREMENT PRIMARY KEY,
    compra_id INT,
    produto_id INT,
    quantidade INT NOT NULL,
    preco_unitario DECIMAL(10,2) NOT NULL,
    FOREIGN KEY (compra_id) REFERENCES compras(id),
    FOREIGN KEY (produto_id) REFERENCES produtos(id)
);

SELECT * FROM itens_compra;



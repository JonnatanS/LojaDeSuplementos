import React from "react";
import produtosJSON from "./produtos.json";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { productId } = useParams(); // Use o hook useParams para obter o productId

  const produto = produtosJSON.produtos.find(
    (p) => p.id === parseInt(productId)
  );

  if (!produto) {
    return <div>Produto não encontrado</div>;
  }

  return (
    <div>
      <h2>{produto.nome}</h2>
      <img src={produto.imagem} className="product-img" alt={produto.nome} />
      <p>Preço: R$ {produto.preco.toFixed(2)}</p>
      <p>Descrição: {produto.descricao}</p>
    </div>
  );
};

export default ProductDetail;

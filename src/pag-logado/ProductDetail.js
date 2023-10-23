import produtosJSON from "./produtos.json";
import { Link, useParams } from "react-router-dom";
import React from "../pag-logado/imports";

//aba de detalhes
const ProductDetail = () => {
  const { productId } = useParams();

  const produto = produtosJSON.produtos.find(
    (p) => p.id === parseInt(productId)
  );

  if (!produto) {
    return <div>Produto não encontrado</div>;
  }

  return (
    <div className="product-box">
      <h2>{produto.nome}</h2>

      <p>Preço: R$ {produto.preco.toFixed(2)}</p>
      <p>Descrição: {produto.descricao}</p>

      <Link to="/homepagelog">Voltar</Link>
    </div>
  );
};

export default ProductDetail;

import { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import produtosJSON from "./produtos.json";

import { React, useEffect } from "../pag-logado/imports";

const Logado = () => {
  const navigate = useNavigate();
  //------------------------------------------------
  const handleDescriptionClick = (productname) => {
    if (showDescription === productname) {
      setShowDescription(null);
    } else {
      setShowDescription(productname);
    }
  };

  //------------------------------

  const [showDescription, setShowDescription] = useState(null);

  const productDescriptions = {};

  produtosJSON.produtos.forEach((produto) => {
    productDescriptions[produto.nome] = produto.descricao;
  });

  const handleImageClick = (productname) => {
    if (showDescription === productname) {
      setShowDescription(null);
    } else {
      setShowDescription(productname);
    }
  };

  //Banco de Dados
  // No seu componente Logado, crie um estado para o carrinho de compras
  // Atualize o estado do carrinho de compras para rastrear a quantidade de cada produto
  const [carrinho, setCarrinho] = useState([]);
  const [quantity, setQuantity] = useState(1);

  // Atualize a função para adicionar um produto ao carrinho
  const adicionarAoCarrinho = (produto, quantidade) => {
    // Verifique se o produto já está no carrinho
    const produtoExistente = carrinho.find((item) => item.id === produto.id);

    if (produtoExistente) {
      // Se o produto já existe no carrinho, atualize apenas a quantidade
      setCarrinho(
        carrinho.map((item) =>
          item.id === produto.id
            ? { ...item, quantidade: item.quantidade + quantidade }
            : item
        )
      );
    } else {
      // Caso contrário, adicione o produto com a quantidade especificada
      setCarrinho([...carrinho, { ...produto, quantidade }]);
    }
  };

  const handleAddToCartClick = (produto, quantidade) => {
    adicionarAoCarrinho(produto, quantidade);
  };

  //PayPall
  // calcule o valor total do carrinho
  const calcularValorTotal = () => {
    let total = 0;
    for (const produto of carrinho) {
      total += produto.preco * produto.quantidade;
    }
    return total;
  };

  //-----------------------------------

  // Função para finalizar a compra
  const finalizarCompra = () => {
    const total = calcularValorTotal(); // Calcule o valor total
    Axios.post("http://localhost:3001/addProduct", { carrinho, total }).then(
      (response) => {
        console.log(response.data);

        setCarrinho([]);

        // Após a compra ser finalizada com sucesso, navegue para a página de pagamento
        navigate("/pagamento");
      }
    );
  };

  useEffect(() => {
    try {
      // Cart
      let cartIcon = document.querySelector("#cart-icon");
      let cart = document.querySelector(".cart");
      let closeCart = document.querySelector("#close-cart");

      // Open Cart
      cartIcon.onclick = () => {
        cart.classList.add("active");
      };

      //Close Cart
      closeCart.onclick = () => {
        cart.classList.remove("active");
      };

      // Cart Working Js

      if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", ready);
      } else {
        ready();
      }

      // Making Function
      function ready() {
        // Remove items from card
        var reomveCartButtons = document.getElementsByClassName("cart-remove");
        console.log(reomveCartButtons);
        for (var i = 0; i < reomveCartButtons.length; i++) {
          var button = reomveCartButtons[i];
          button.addEventListener("click", removeCartItem);
        }

        // Quantity Changes
        var quantityInputs = document.getElementsByClassName("cart-quantity");
        for (i = 0; i < quantityInputs.length; i++) {
          var input = quantityInputs[i];
          input.addEventListener("change", quantityChanged);
        }
        // Add to Cart
        var addCart = document.getElementsByClassName("add-cart");
        for (i = 0; i < addCart.length; i++) {
          button = addCart[i];
          button.addEventListener("click", addCartClicked);
        }
        // Buy button Work
        document
          .getElementsByClassName("btn-buy")[0]
          .addEventListener("click", buyButtonClicked);
      }

      // Buy Button
      function buyButtonClicked() {
        var cartContent = document.getElementsByClassName("cart-content")[0];
        var numberOfItems = cartContent.childElementCount; // Obtém o número de itens no carrinho
        while (cartContent.hasChildNodes()) {
          cartContent.removeChild(cartContent.firstChild);
        }
        if (numberOfItems > 0) {
          alert("Selecione a Forma de pagamento");
        } else {
        }
        updateTotal();
      }

      // Remove items from cart

      function removeCartItem(event) {
        var buttonClicked = event.target;
        buttonClicked.parentElement.remove();
        updateTotal();
      }

      // Quantity Changes
      function quantityChanged(event) {
        var input = event.target;
        if (isNaN(input.value) || input.value <= 0) {
          input.value = 1;
        }
        updateTotal();
      }

      //Add to cart
      function addCartClicked(event) {
        var button = event.target;
        var shopProducts = button.parentElement;
        var title =
          shopProducts.getElementsByClassName("product-title")[0].innerText;
        var price = shopProducts.getElementsByClassName("price")[0].innerText;
        var productImg =
          shopProducts.getElementsByClassName("product-img")[0].src;
        var quantityInput =
          shopProducts.getElementsByClassName("cart-quantity")[0];
        if (quantityInput) {
          var quantity = parseInt(quantityInput.value);
          // Faça algo com a quantidade
        } else {
          console.error(
            "Elemento com a classe 'cart-quantity' não encontrado."
          );
        }

        addProductToCart(title, price, productImg, quantity);
        updateTotal();
      }

      function addProductToCart(title, price, productImg, quantity) {
        // Atualize a função para receber a quantidade
        var cartShopBox = document.createElement("div");
        cartShopBox.classList.add("cart-box");
        var cartItems = document.getElementsByClassName("cart-content")[0];
        var carItemsNames =
          cartItems.getElementsByClassName("cart-product-title");
        for (var i = 0; i < carItemsNames.length; i++) {
          if (carItemsNames[i].innerText === title) {
            return;
          }
        }

        var cartBoxContent = `
          <img src="${productImg}" alt="" class="cart-img" />
          <div class="detail-box">
            <div class="cart-product-title">${title}</div>
            <div class="cart-price">${price}</div>
            <input type="number" value="${quantity}" class="cart-quantity" /> 
          </div>
          <!-- Remove Cart -->
          <i class="bx bxs-trash-alt cart-remove"></i>`;

        cartShopBox.innerHTML = cartBoxContent;
        cartItems.append(cartShopBox);
        cartShopBox
          .getElementsByClassName("cart-remove")[0]
          .addEventListener("click", removeCartItem);
        cartShopBox
          .getElementsByClassName("cart-quantity")[0]
          .addEventListener("change", quantityChanged);
      }
      // Update Total
      function updateTotal() {
        var cartContent = document.getElementsByClassName("cart-content")[0];
        var cartBoxes = cartContent.getElementsByClassName("cart-box");
        var total = 0;
        for (var i = 0; i < cartBoxes.length; i++) {
          var cartBox = cartBoxes[i];
          var priceElement = cartBox.getElementsByClassName("cart-price")[0];
          var quantityElement =
            cartBox.getElementsByClassName("cart-quantity")[0];
          var priceText = priceElement.innerText
            .replace("R$", "")
            .replace(",", ".");
          var price = parseFloat(priceText);
          var quantity = parseFloat(quantityElement.value);
          total += price * quantity;
        }

        // Formate o total com 2 casas decimais para exibição
        var formattedTotal = total.toFixed(2);

        document.getElementsByClassName("total-price")[0].innerText =
          "R$" + formattedTotal;
      }
    } catch (error) {
      console.error("Erro no componente Logado:", error);
    }
  }, []); // O segundo argumento vazio [] garante que isso seja executado apenas quando o componente é montado.

  return (
    <div>
      <div style={{ margin: 0, fontFamily: "Noto Sans, sans-serif" }}>
        <header>
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>Python Suplementos</title>
          <link rel="stylesheet" href="./css-home/style.css" />
          <link
            href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
            rel="stylesheet"
          />
          <div className="nav container">
            <a href="#/" className="logo">
              Python Suplementos
            </a>

            <div className="duvidas">
              Duvidas ou Feedback? Ligue: 11 96809-6581 ou Email -
              jonnatansouza65@gmail.com
            </div>

            <div className="log container">
              Bem Vindo
              <a href="/" className="logo">
                <br></br> Sair
              </a>
              <i className="bx bx-log-in"></i>
            </div>
            <i className="bx bx-shopping-bag" id="cart-icon"></i>
            <div className="cart">
              <h2 className="cart-title">Seu Carrinho</h2>
              <div className="cart-content"></div>
              <div className="total">
                <div className="total-title">Total</div>
                <div className="total-price">R$0.00</div>
              </div>
              <button
                type="button"
                name="button"
                className="btn-buy"
                onClick={finalizarCompra}
              >
                <span>Compre Agora</span>
              </button>
              <i className="bx bx-x" id="close-cart"></i>
            </div>
          </div>
        </header>

        <section className="shop container">
          <h2 className="section-title">Produtos</h2>
          <div className="shop-content">
            {produtosJSON.produtos.map((produto) => (
              <div className="product-box" key={produto.id}>
                <Link
                  to={`/detalhes/id/${produto.id}`}
                  className="product-link"
                >
                  <img
                    src={produto.imagem}
                    alt=""
                    className="product-img"
                    onClick={() => handleImageClick(produto.nome)}
                  />
                  <h2 className="product-title">{produto.nome}</h2>
                </Link>

                <span className="price">R$ {produto.preco.toFixed(2)}</span>
                <input
                  type="number"
                  min="1"
                  className="cart-quantity"
                  value={quantity} // Use a variável de estado 'quantity' para definir o valor
                  onChange={(e) => setQuantity(e.target.value)}
                />
                <button
                  className="bx bx-shopping-bag add-cart"
                  onClick={() => handleAddToCartClick(produto, quantity)}
                >
                  Adicionar ao Carrinho
                </button>
                <i onClick={() => adicionarAoCarrinho(produto)}></i>
                <i
                  className="bx bx-info-circle product-info"
                  onClick={() => handleDescriptionClick(produto.nome)}
                ></i>
                {showDescription === produto.nome && (
                  <p className="product-description">
                    {productDescriptions[produto.nome]}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Logado;

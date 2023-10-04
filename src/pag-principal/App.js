import React, { useEffect } from "react";

import "../Frontend/css-home/style.css";
import Alb from "../Frontend/css-home/albumina1.png";
import Barra from "../Frontend/css-home/barraproteina1.png";
import BCAA from "../Frontend/css-home/bcaa1.png";
import Cafeina from "../Frontend/css-home/cafeina.png";
import Glutamina from "../Frontend/css-home/glutamina1.png";
import Omega from "../Frontend/css-home/omega3.png";
import Vita from "../Frontend/css-home/vitamina-a-az.png";
import Whey from "../Frontend/css-home/whey1.png";
import Creatina from "../Frontend/css-home/cafeina.png";

const App = () => {
  useEffect(() => {
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

    // Restante da lógica do main.js aqui...
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
      while (cartContent.hasChildNodes()) {
        cartContent.removeChild(cartContent.firstChild);
        alert("Seu pedido foi feito");
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
      addProductToCart(title, price, productImg);
      updateTotal();
    }

    function addProductToCart(title, price, productImg) {
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
                <input type="number" value="1" class="cart-quantity" />
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
  }, []); // O segundo argumento vazio [] garante que isso seja executado apenas quando o componente é montado.

  return (
    // Seu código JSX aqui...
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Python Suplementos</title>
        <link rel="stylesheet" href="./css-home/style.css" />
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
        {/* Box icons */}
      </head>
      <body>
        <header>
          {/* Nav */}
          <div className="nav container">
            <a href="#" className="logo">
              Suplementos
            </a>

            {/* Cart Icons */}
            <i className="bx bx-shopping-bag" id="cart-icon"></i>

            {/* Cart */}
            <div className="cart">
              <h2 className="cart-title">Seu Carrinho</h2>

              {/* Content */}
              <div className="cart-content"></div>

              {/* Total */}
              <div className="total">
                <div className="total-title">Total</div>
                <div className="total-price">R$00,00</div>
              </div>

              {/* Buy Button */}
              <button type="button" className="btn-buy">
                Compre Agora
              </button>

              {/* Cart Close */}
              <i className="bx bx-x" id="close-cart"></i>
            </div>
          </div>
        </header>

        {/* Shop */}
        <section className="shop container">
          <h2 className="section-title">Produtos</h2>
          {/* Content */}
          <div className="shop-content">
            {/* Box 1 */}
            <div className="product-box">
              <img src={Whey} alt="" className="product-img" />
              <h2 className="product-title">Whey Protein</h2>
              <span className="price">R$ 98,99</span>
              <i className="bx bx-shopping-bag add-cart"></i>
            </div>
            {/* Box 2 */}
            <div className="product-box">
              <img src={Vita} alt="" className="product-img" />
              <h2 className="product-title">Suplemento Vitamina A a-z</h2>
              <span className="price">R$ 15,00</span>
              <i className="bx bx-shopping-bag add-cart"></i>
            </div>
            {/* Box 3 */}
            <div className="product-box">
              <img src={Omega} alt="" className="product-img" />
              <h2 className="product-title">Omega 3</h2>
              <span className="price">R$ 60,00</span>
              <i className="bx bx-shopping-bag add-cart"></i>
            </div>
            {/* Box 4 */}
            <div className="product-box">
              <img src={Glutamina} alt="" className="product-img" />
              <h2 className="product-title">Glutamina</h2>
              <span className="price">R$ 60,00</span>
              <i className="bx bx-shopping-bag add-cart"></i>
            </div>
            {/* Box 5 */}
            <div className="product-box">
              <img src={Creatina} alt="" className="product-img" />
              <h2 className="product-title">Creatina</h2>
              <span className="price">R$ 79,90</span>
              <i className="bx bx-shopping-bag add-cart"></i>
            </div>
            {/* Box 6 */}
            <div className="product-box">
              <img src={Cafeina} alt="" className="product-img" />
              <h2 className="product-title">Cafeína</h2>
              <span className="price">R$ 80,00</span>
              <i className="bx bx-shopping-bag add-cart"></i>
            </div>
            {/* Box 7 */}
            <div className="product-box">
              <img src={BCAA} alt="" className="product-img" />
              <h2 className="product-title">BCAA</h2>
              <span className="price">R$ 40,00</span>
              <i className="bx bx-shopping-bag add-cart"></i>
            </div>
            {/* Box 8 */}
            <div className="product-box">
              <img src={Barra} alt="" className="product-img" />
              <h2 className="product-title">Barra com Whey Protein</h2>
              <span className="price">R$ 98,99</span>
              <i className="bx bx-shopping-bag add-cart"></i>
            </div>
            {/* Box 9 */}
            <div className="product-box">
              <img src={Alb} alt="" className="product-img" />
              <h2 className="product-title">Albumina</h2>
              <span className="price">R$ 65,00</span>
              <i className="bx bx-shopping-bag add-cart"></i>
            </div>
          </div>
        </section>

        {/* Js */}
      </body>
    </html>
  );
};

export default App;

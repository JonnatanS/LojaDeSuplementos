import React, { useState } from "react";
import "./paypal-css/Pagamento.css";
import PayPal from "../paypal";

function Paypal() {
  const [checkout, setCheckOut] = useState(false);

  return (
    <div className="App">
      {checkout ? (
        <PayPal />
      ) : (
        <button
          onClick={() => {
            setCheckOut(true);
          }}
        >
          Checkout
        </button>
      )}
    </div>
  );
}

export default Paypal;

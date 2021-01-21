import React from "react";
import "./Subtotal.css";
import CurrenyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";

function Subtotal() {
  const [{ basket }] = useStateValue();
  return (
    <div className="subtotal">
      <CurrenyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal({basket.length}items):<strong>{`${value}`}</strong>
            </p>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thoundsandSeparator={true}
        prefix={"₹"}
      ></CurrenyFormat>
      <button>Proceed To Checkout</button>
    </div>
  );
}

export default Subtotal;

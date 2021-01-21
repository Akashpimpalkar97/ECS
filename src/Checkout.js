import React from "react";
import { useStateValue } from "./StateProvider";
import "./Checkout.css";
import CheckoutProducts from "./CheckoutProducts";
import Subtotal from "./Subtotal";
function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images.squarespace-cdn.com/content/v1/5c6fd9967a1fbd34674cb79c/1568891924609-B3LXXG1IHE7FJYEVZJ28/ke17ZwdGBToddI8pDm48kG4VaGK2BDoypcV72v3WXxkUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcQ7p8169p8qxgXVKEB23rQXgFGdd18FgKgV2HQBaPNGG3yBSUmSgz7kzVX4TWod5R/Fiction+banner.jpg?format=1500w"
          alt=""
        />
        {basket?.length === 0 ? (
          <div className="checkout__title">
            <h2>Your Cart is Empty</h2>
            <p>
              You have no items in your Cart. To buy one or more items, click
              "Add to Cart" next to the item.
            </p>
          </div>
        ) : (
          <div>
            <h2 className="checkout__title">Your Shopping Cart</h2>
            {basket.map((item) => (
              <CheckoutProducts
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
      {basket.length > 0 && (
        <div className="checkout__right">
          <Subtotal />
        </div>
      )}
    </div>
  );
}

export default Checkout;

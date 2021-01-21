import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, price, rating, image, author, book_lang }) {
  const [{}, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>
          <span style={{ fontWeight: "bold" }}>{title}</span> by{" "}
          <span style={{ color: "darkgreen" }}>{author}</span>
          {book_lang}
        </p>

        <p className="product__price">
          <strong>₹{price}</strong>
        </p>
        <div className="product__rating">
          <p
            style={{
              fontWeight: "bold",
              color: "darkred",
              textTransform: "capitalize",
            }}
          >
            {book_lang}
          </p>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <span>🔯</span>
            ))}
        </div>
      </div>

      <img src={image} alt="" />
      <button onClick={addToBasket}>Add to Cart</button>
    </div>
  );
}

export default Product;

import React, { useEffect, useState } from "react";
import "./Home.css";
import Product from "./Product";
import axios from "axios";
import logo from "./header_logo/book_logo.png";
import preloader from "./header_logo/preloader.gif";
function Home() {
  const [bookData, setBookData] = useState([]);
  const [loading, setLoading] = useState(false);
  const url =
    "https://s3-ap-southeast-1.amazonaws.com/he-public-data/books8f8fe52.json";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(url);

      setBookData(request.data);
      setLoading(true);
    }

    fetchData();
  }, [bookData]);

  return (
    <div className="home">
      <img
        className="home__image"
        src="https://ubuildabook.com/public/uploads/pages/1535650164_BooksLaptop_1300x280.jpg"
        alt=""
      />
      <div className="home__row">
        {loading ? (
          bookData.map((info) => (
            <Product
              key={info.bookID}
              title={info.title}
              price={info.price}
              author={info.authors}
              book_lang={info.language_code}
              rating={4}
              image={logo}
            ></Product>
          ))
        ) : (
          <img src={preloader} />
        )}
      </div>
    </div>
  );
}

export default Home;

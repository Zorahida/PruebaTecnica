import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import "./Home.css";

function Home() {
  const [items, setItem] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=12")
      .then((response) => response.json())
      .then((data) => {
        setItem(data);
      });
  }, []);

  return (
    <div className="Product">
      <h1>
        <FormattedMessage id="home.welcome" defaultMessage="Welcome to this fabulous shop!" />
      </h1>
      <ul className="productList">
        {items.map((product) => (
          <li key={product.id}>
            <Link to={`/product/${product.id}`}>
              <div className="product-item">
                <img src={product.image} alt={product.title} />
                <div className="product-details">
                  <h2>{product.title}</h2>
                  <p>
                    <FormattedMessage id="home.price" defaultMessage="Price: $" /> {product.price}
                  </p>
                  <p>
                    <FormattedMessage id="home.category" defaultMessage="Category: " /> {product.category}
                  </p>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;

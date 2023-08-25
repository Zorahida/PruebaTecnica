import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


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
        <div className="ProductList">
          <h1>Welcome to this fabulous shop!</h1>
          <ul>  {items.map((product) => (
          <li key={product.id}>
            <Link to={`/product/${product.id}`}>
            <div className="product-item">
              <img src={product.image} alt={product.title} />
              <div className="product-details">
                <h2>{product.title}</h2>
                <p>Price: ${product.price}</p>
                <p>Category: {product.category}</p>
              </div>
            </div>
            </Link>
          </li>
        ))}</ul>
        </div>
      );
}

    export default Home
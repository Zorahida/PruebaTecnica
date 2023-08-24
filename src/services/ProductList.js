import { useEffect, useState } from "react";


function ProductList() {
      const [item, setItem] = useState([]);
    
      useEffect(() => {
        fetch(`https://fakestoreapi.com/products?limit=8`)
        .then((response) => response.json())
        .then((data) => {
            setItem(data);
          });
        }, []);
    
     
      const mapItem = item.map((product, i) => {
        return <li key={i}>{product.title}</li>;
      });
    
      return (
        <div className="ProductList">
          <h1>Poduct List</h1>
          <ul>{mapItem}</ul>
        </div>
      );
    }
    
    export default ProductList;
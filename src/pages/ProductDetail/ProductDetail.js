import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DaymodeContext from "../../components/DayNight/DayNight";

function ProductDetail() {
  const {productId} = useParams();
  const [product,setProduct] = useState(null);
  const [mode,setMode] = useState(false);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((response)=> response.json())
      .then((data) => {
        setProduct(data);
      });
  },[productId]);

  if (!product) {
      return <div>Loading...</div>;
  }

  return (
    <DaymodeContext.Provider value={{ mode, setMode }}>
    <div className="ProductDetail">
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} />
      <p>Price: ${product.price}</p>
      <p>Category: {product.category}</p>
      
    </div>
    </DaymodeContext.Provider>
  );
}

export default ProductDetail;
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function ProductDetail() {
  const {productId} = useParams();
  const [product,setProduct] = useState(null);

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
    <div className="ProductDetail">
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} />
      <p>Price: ${product.price}</p>
      <p>Category: {product.category}</p>
      
    </div>
  );
}

export default ProductDetail;
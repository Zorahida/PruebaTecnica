import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import DaymodeContext from "../../components/DayNight/DayNight";

function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [mode, setMode] = useState(false);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
      });
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <DaymodeContext.Provider value={{ mode, setMode }}>
      <div className="ProductDetail">
        <h2>
          <FormattedMessage id="product.title" defaultMessage={product.title} />
        </h2>
        <img src={product.image} alt={product.title} />
        <p>
          <FormattedMessage
            id="product.price"
            defaultMessage={`Price: ${product.price}`}
          />
        </p>
        <p>
          <FormattedMessage
            id="product.category"
            defaultMessage={`Category: ${product.category}`}
          />
        </p>
      </div>
    </DaymodeContext.Provider>
  );
}

export default ProductDetail;

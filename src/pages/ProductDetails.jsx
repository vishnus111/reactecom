import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data';

function ProductDetails() {
  const { id } = useParams();
  const product = products.find((prod) => prod.id === parseInt(id));

  return (
    <div className="row">
      <div className="col-md-6">
        <img src={product.image} className="img-fluid" alt={product.name} />
      </div>
      <div className="col-md-6">
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <h3>${product.price}</h3>
        <button className="btn btn-primary">Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductDetails;

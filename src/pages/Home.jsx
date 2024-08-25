import React from 'react';
import ProductCard from '../components/ProductCard';
import { products } from '../data';
//import { Carousel } from 'bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import CarouselComponent from '../components/carousel/CarouselComponent';


function Home() {
  return (
    <>
    <div className="row">
    <CarouselComponent/>

    <h1>Products</h1>
    
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
    
    </>
  );
}

export default Home;

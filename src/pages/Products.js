import React from 'react';
import ProductCard from '../components/ProductCard';
import styles from "../styles/Products.module.css"

const ProductList = () => {
    
  return (
    <div>
        <div>
          <h1 className={styles.Heading1}>All Products</h1>
        </div>
        <ProductCard />
    </div>
  );
};

export default ProductList;

import React, { useContext }  from 'react';
import { CartContext } from "../contexts/CartContext";
import ProductCard from '../components/ProductCard';
import styles from "../styles/Products.module.css"

const ProductList = () => {
  const { addToCart } = useContext(CartContext);
  return (
    <div>
        <div>
          <h1 className={styles.Heading1}>All Products</h1>
        </div>
        <ProductCard />
        <hr></hr>
    </div>
  );
};

export default ProductList;

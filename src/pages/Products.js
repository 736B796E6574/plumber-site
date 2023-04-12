import React, { useContext }  from 'react';
import ProductCard from '../components/ProductCard';
import styles from "../styles/Products.module.css"
import { CartContext } from "../contexts/CartContext";

const ProductList = () => {
  const { addToCart } = useContext(CartContext);
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

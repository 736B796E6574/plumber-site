import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AddToCartButton = ({ to, children }) => {
  const style = {
    width: '55%',
    height: '40%',
    backgroundColor: "#005683",
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: '500',
    color: '#fafafa',
    boxShadow: '0 2px 4px 0 rgba(0, 0, 0, .2)',
  };

  const linkStyle = {
    textDecoration: 'none',
    color: 'inherit',
  };

  return (
    <Link to={to} style={linkStyle}>
      <Button style={style}>{children}Add To Cart</Button>
    </Link>
  );
};

export default AddToCartButton;

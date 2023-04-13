// Cart.js
import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import {
    Container,
    Row,
    Col,
    ListGroup,
    ListGroupItem,
    Button,
    Form,
  } from "react-bootstrap";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);

  const handleQuantityChange = (event, productId) => {
    const newQuantity = parseInt(event.target.value);
    updateQuantity(productId, newQuantity);
  };

  return (
    <Container>
      <Row>
        <Col>
          <h2>Cart</h2>
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <ListGroup>
              {cart.map((item) => (
                <ListGroupItem key={item.id}>
                  <Row>
                    <Col md={4}>{item.name}</Col>
                    <Col md={2}>€{item.price}</Col>
                    <Col md={3}>
                      <Form.Control
                        as="input"
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(event) => handleQuantityChange(event, item.id)}
                      />
                    </Col>
                    <Col md={3}>
                      <Button
                        variant="danger"
                        onClick={() => removeFromCart(item.id)}
                      >
                        Remove from cart
                      </Button>
                    </Col>
                  </Row>
                </ListGroupItem>
              ))}
            </ListGroup>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;

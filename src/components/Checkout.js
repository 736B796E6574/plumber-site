import React, { useState, useContext } from "react";
import {
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { Container, Row, Col, Table, Form, Button, Alert } from "react-bootstrap";
import "../styles/Checkout.module.css";
import { CartContext } from "../contexts/CartContext";

const Checkout = () => {
  const { cart } = useContext(CartContext);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const stripe = useStripe();
  const elements = useElements();

  const totalCost = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
      billing_details: {
        name,
        address: {
          line1: address,
        },
      },
    });

    if (error) {
      setErrorMessage(error.message);
    } else {
      setSuccessMessage("Payment successful! Thank you for your purchase.");
      console.log("[PaymentMethod]", paymentMethod);
      // TODO: send paymentMethod.id to your server to charge the card
    }
  };

  return (
    <Container>
      <Row>
        <Col>
          <h2>Checkout</h2>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((product) => (
                <tr key={product.id}>
                  <td>{product.name}</td>
                  <td>${product.price.toFixed(2)}</td>
                  <td>{product.quantity}</td>
                  <td>${(product.price * product.quantity).toFixed(2)}</td>
                </tr>
              ))}
              <tr>
                <td colSpan="3">Total</td>
                <td>${totalCost.toFixed(2)}</td>
              </tr>
            </tbody>
          </Table>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group controlId="formAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Card details</Form.Label>
              <CardElement />
            </Form.Group>
            <Button type="submit" disabled={!stripe}>
              Pay ${totalCost.toFixed(2)}
            </Button>
          </Form>
          {successMessage && (
            <Alert variant="success" className="mt-3">
            {successMessage}
          </Alert>
        )}
        {errorMessage && (
          <Alert variant="danger" className="mt-3">
            {errorMessage}
          </Alert>
        )}
      </Col>
    </Row>
  </Container>
);
};

export default Checkout;

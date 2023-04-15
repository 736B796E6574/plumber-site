import React, { useState, useContext } from "react";
import {
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { Container, Row, Col, Table, Form, Button, Alert } from "react-bootstrap";
import "../styles/Checkout.module.css";
import { CartContext } from "../contexts/CartContext";
import Select from 'react-select';
import { getNames } from 'country-list';

const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      color: '#32325d',
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
      fontSmoothing: 'antialiased',
      fontSize: '16px',
      '::placeholder': {
        color: 'rgb(33,37,41)',
      },
    },
    invalid: {
      color: '#fa755a',
      iconColor: '#fa755a',
    },
  },
};

const Checkout = () => {
  
  const countries = getNames().map((name) => ({ label: name, value: name }));
  const { cart } = useContext(CartContext);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [country, setCountry] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const colStyle = {
    borderWidth: '1px',
    borderColor: 'black',
    borderRadius: '4px',
    borderStyle: 'solid',
  };

  const stripe = useStripe();
  const elements = useElements();

  const totalCost = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const handleCountryChange = (selectedCountry) => {
    if (selectedCountry) {
      setCountry(selectedCountry.value);
    } else {
      setCountry(null);
    }
  };
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
          city,
          state,
          postal_code: zip,
          country,
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
                <th>Image</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((product) => (
                <tr key={product.id}>
                  <td>{product.name}</td>
                  <td>
                    <img
                      src={product.image}
                      alt={product.name}
                      style={{ width: '50px', height: 'auto' }}
                    />
                  </td>
                  <td>${product.price.toFixed(2)}</td>
                  <td>{product.quantity}</td>
                  <td>${(product.price * product.quantity).toFixed(2)}</td>
                </tr>
              ))}
              <tr>
                <td colSpan="4">Total</td>
                <td>${totalCost.toFixed(2)}</td>
              </tr>
            </tbody>
          </Table>
          </Col>
          </Row>
          <Row justify-content-sm-center>
          <Col style={colStyle} className="mx-auto" xs={10} md={6} lg={4}>
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
            <Form.Group controlId="formCity">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group controlId="formState">
              <Form.Label>State / Province</Form.Label>
              <Form.Control
                type="text"
                value={state}
                onChange={(e) => setState(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group controlId="formZip">
              <Form.Label>Postal Code</Form.Label>
              <Form.Control
                type="text"
                value={zip}
                onChange={(e) => setZip(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group controlId="formCountry">
              <Form.Label>Country</Form.Label>
              <Select
                value={countries.find((option) => option.value === country)}
                onChange={handleCountryChange}
                options={countries}
                isSearchable
                isClearable
              />
              
            </Form.Group>
            <Form.Group>
              <Form.Label>Card details</Form.Label>
              <CardElement className="mb-3 mt-3" options={CARD_ELEMENT_OPTIONS} />
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

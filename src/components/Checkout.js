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
import { getNames, getCodes } from 'country-list';
import styles from "../styles/Checkout.module.css"

const CARD_ELEMENT_OPTIONS = {
  hidePostalCode: true,
  style: {
    base: {
      color: '#32325d',
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
      fontSmoothing: 'antialiased',
      fontSize: '16px',
      '::placeholder': {
        color: '#808487',
        
      },
    },':-webkit-autofill': {
      color: '#a1000e',
      fontFamily: '"Courier New", monospace',
      fontSize: '14px',
      fontStyle: 'normal',
      fontWeight: 'normal',
      letterSpacing: '0.025em',
      textDecoration: 'none',
      textTransform: 'capitalize',
    },
    invalid: {
      color: '#fa755a',
      iconColor: '#fa755a',
    },
  },
};

const Checkout = () => {
  const countryCodes = getCodes();
  const countryNames = getNames();
  const countries = countryNames.map((name, index) => ({ label: name, value: countryCodes[index] }));
  const { cart } = useContext(CartContext);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [country, setCountry] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  

  const stripe = useStripe();
  const elements = useElements();

  const deliveryCost = 15;
const totalCost = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
const totalOrderCost = totalCost + deliveryCost;

  
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
        email,
        phone: phoneNumber,
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
          <h1 className={styles.Heading1}>Checkout</h1>
          
          </Col>
          </Row>
          <Row justify-content-sm-center className="py-4">
            
          <Col className="mx-auto p-3" xs={10} md={6} lg={6}>
          
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                value={name}
                placeholder="Enter your full name"
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formPhoneNumber">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Enter your phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group controlId="formAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                value={address}
                placeholder="Enter your street address"
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group controlId="formCity">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                value={city}
                placeholder="Enter your City"
                onChange={(e) => setCity(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group controlId="formState">
              <Form.Label>State / Province</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your State/County"
                value={state}
                onChange={(e) => setState(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group controlId="formZip">
              <Form.Label>Postal Code</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your Postal Code"
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
              <Container className={styles.CardElement}>
              <CardElement className="mb-3 mt-3 rounded" options={CARD_ELEMENT_OPTIONS} />
              </Container>
            </Form.Group>
            
            <div class="checkout-button-container">
    <Button type="submit" disabled={!stripe} className="checkout-buttons">Complete Payment</Button>
    </div>
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
      <Col className='p-4 col-md-4'>
  <div className="order-summary">
    <h2>Order Summary</h2>
    <div class="sub-total-container">
    <p>Subtotal</p>
    <p className="checkout-total">€{totalCost.toFixed(2)}</p>

    </div>
    <p>Delivery</p>
    <p className="delivery-info">
  {deliveryCost > 0 ? `Delivery Cost: €${deliveryCost}` : "Delivery will be added at checkout (if applicable)"}
</p>
    <hr></hr>
    <p>Add coupon code at checkout</p>
    <hr></hr>
    <div class="sub-total-container">
    <p>Total</p>
    <p className="checkout-total">€{totalOrderCost}</p>
    </div>
    <div class="checkout-button-container">
    <Button className="checkout-buttons">Back to cart</Button>
    </div>
    <div class="payment-methods-container">
    <img src="https://www.diy.ie/spa/images/df7f9.svg"></img>
    <img src="https://www.diy.ie/spa/images/183ec.svg"></img>
    <img src="https://www.diy.ie/spa/images/0580e.svg"></img>
    <img src="https://www.diy.ie/spa/images/7bd44.svg"></img>
    <img src="https://www.diy.ie/spa/images/200e5.svg"></img>
    </div>
    
    
  </div>
  <div class="cart-info">
  <p class="cart-text-1">Your personal details are protected.</p>
    <p class="cart-text-2">Learn More</p>
    <div class="cart-info-images-container">
      <img src="https://www.diy.ie/spa/images/70ced.svg"></img>
      <img src="https://www.diy.ie/spa/images/95439.svg"></img>
      <img src="https://www.diy.ie/spa/images/e3e08.svg"></img>
    </div>
    <p class="cart-text-3">Helping you to buy</p>
    <p class="cart-text-4">Customer support team - <span class="phone-number">0373284628</span></p>
    </div>
</Col>
    </Row>
  </Container>
);
};

export default Checkout;

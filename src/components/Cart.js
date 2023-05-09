import React, { useContext } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "../styles/Cart.css";
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";


function Cart() {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <Container className="cart-container" fluid>
        <Row>
          <Col className="mt-5">
            <div className="d-flex flex-row cart-headers p-3">
              <h1>My basket</h1>
              <p className="item-count">
                {cart.length} Item{cart.length === 1 ? "" : "s"}
              </p>
              <p className="continue-p">
                ⬅ <span className="continue-shopping">Continue Shopping</span>
              </p>
            </div>
          </Col>
          <Col className="mt-5 col-md-4">
            <div className="p-3 text-center">
            <Link to="/checkout">
  <Button className="checkout-buttons">Continue to checkout</Button>
</Link>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="p-4">
            {cart.map((product) => (
              <div key={product.id} style={{ marginBottom: "10px" }} className="product-card d-flex">
                <div className="p-3">
                  <img style={{
    width: "50%",
    height: "auto",
  }} src={product.image_url} alt={product.name} />
                </div>
                <div>
                  <p>
                    {product.name}
                    <br />
                    (L)25m (Dia)80mm
                  </p>
                  <p>✈︎ Home Delivery</p>
                  <p>☞ Click & Collect</p>
                  <p className="click-collect">
                    Not available for click & collect
                  </p>
                  <div className="quantity-container">
                    <button
                      className="quantity-button"
                      onClick={() =>
                        updateQuantity(product.id, product.quantity - 1)
                      }
                    >
                      -
                    </button>
                    <div className="quantity-button">
                      <span>{product.quantity}</span>
                    </div>
                    <button
                      className="quantity-button"
                      onClick={() =>
                        updateQuantity(product.id, product.quantity + 1)
                      }
                    >
                      +
                    </button>
                    <a
                      className="cart-delete-icon"
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        removeFromCart(product.id);
                      }}
                    >
                      ✖︎
                    </a>
                  </div>
                </div>
                <div className="product-price">€{product.price.toFixed(2)}</div>
              </div>
            ))}
          </Col>
          <Col className="p-4 col-md-4">
            <div className="order-summary">
              <h2>Order Summary</h2>
              <div className="sub-total-container">
                <p>Subtotal</p>
                <p>€{subtotal.toFixed(2)}</p>
              </div>
              <p>Delivery</p>
              <p className="delivery-info">
                Delivery will be added at checkout (if applicable)
              </p>
              <hr />
              <p>Add coupon code at checkout</p>
              <hr />
              <div className="sub-total-container">
                <p>Total</p>
                <p className="checkout-total">€{subtotal.toFixed(2)}</p>
              </div>
              <div className="checkout-button-container">
              <Link to="/checkout">
  <Button className="checkout-buttons">Continue to checkout</Button>
</Link>
</div>
<div className="payment-methods-container">
<img src="https://www.diy.ie/spa/images/df7f9.svg" alt="Payment Method" />
<img src="https://www.diy.ie/spa/images/183ec.svg" alt="Payment Method" />
<img src="https://www.diy.ie/spa/images/0580e.svg" alt="Payment Method" />
<img src="https://www.diy.ie/spa/images/7bd44.svg" alt="Payment Method" />
<img src="https://www.diy.ie/spa/images/200e5.svg" alt="Payment Method" />
</div>
</div>
<div className="cart-info">
<p className="cart-text-1">Your personal details are protected.</p>
<p className="cart-text-2">Learn More</p>
<div className="cart-info-images-container">
<img src="https://www.diy.ie/spa/images/70ced.svg" alt="Information Icon" />
<img src="https://www.diy.ie/spa/images/95439.svg" alt="Information Icon" />
<img src="https://www.diy.ie/spa/images/e3e08.svg" alt="Information Icon" />
</div>
<p className="cart-text-3">Helping you to buy</p>
<p className="cart-text-4">
Customer support team - <span className="phone-number">0373284628</span>
</p>
</div>
</Col>
</Row>
</Container>
</div>
);
}

export default Cart;

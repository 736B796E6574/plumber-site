import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import "../styles/Cart.css"
function Cart() {
  return (
    <div>
      <Container className="cart-container" fluid>
        <Row>
          <Col className="mt-5">
          <div className="d-flex flex-row cart-headers p-3"><h1>My basket</h1><p className="item-count">1 Item</p>
          <p className="continue-p">⬅ <span className='continue-shopping'>Continue Shopping</span></p>
          </div>
         </Col>
        <Col className='mt-5 col-md-4'>
          <div className="p-3 text-center">
        <Button className="checkout-buttons">Continue to checkout</Button>
          </div>
        </Col>
        </Row>
<Row>
<Col className='p-4'>

  <div className="product-card d-flex">
    <div className='p-3'><img src='https://media.diy.com/is/image/Kingfisher/floplast-black-flexible-waste-pipe-l-25m-dia-80mm~5055149925689_02c?$MOB_PREV$&$width=115&$height=115'></img></div>
    <div>
    <p className=''>FloPlast Black Flexible Waste pipe,<br></br>(L)25m (Dia)80mm</p>
    <p>✈︎ Home Delivery</p>
    <p>☞ Click & Collect</p>
    <p class="click-collect">Not available for click & collect</p>
  <div class="quantity-container">
    <button class="quantity-button">-</button>
    <div class="quantity-button"><span>0</span></div>
    <button class="quantity-button">+</button>
    <a class="cart-delete-icon" href="#">✖︎</a>
  </div>
    </div>
    <div class="product-price">€356</div>
  </div>
</Col>
<Col className='p-4 col-md-4'>
  <div className="order-summary">
    <h2>Order Summary</h2>
    <div class="sub-total-container">
    <p>Subtotal</p>
    <p>$450</p>
    </div>
    <p>Delivery</p>
    <p class="delivery-info">Delivery will be added at checkout (if applicable)</p>
    <hr></hr>
    <p>Add coupon code at checkout</p>
    <hr></hr>
    <div class="sub-total-container">
    <p>Total</p>
    <p class="checkout-total">$450</p>
    </div>
    <div class="checkout-button-container">
    <Button className="checkout-buttons">Continue to checkout</Button>
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

      
    </div>
  )
}

export default Cart
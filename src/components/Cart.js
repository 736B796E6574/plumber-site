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

  <div className="bg-light d-flex">
    <div className='p-3'><img src='https://media.diy.com/is/image/Kingfisher/floplast-black-flexible-waste-pipe-l-25m-dia-80mm~5055149925689_02c?$MOB_PREV$&$width=115&$height=115'></img></div>
    <div>
    <p className=''>I am the name of a lovely product</p>
    <p>I am some spiel about a potential special offer</p>
  <div>
    <Button>-</Button>
    <span>0</span>
    <Button>+</Button>
  </div>
    </div>
    <div>$356</div>
  </div>
</Col>
<Col className='p-4 col-md-4'>
  <div className="bg-light">
    <p>Order Summary</p>
    <p>Subtotal</p>
    <p>$450</p>
    <p>Delivery</p>
    <p>Delivery will be added at checkout</p>
    <p>Total</p>
    <p>$450</p>
    <Button className="checkout-buttons">Go to checkout</Button>
    <div>
    <img src="https://www.diy.ie/spa/images/df7f9.svg"></img>
    <img src="https://www.diy.ie/spa/images/183ec.svg"></img>
    <img src="https://www.diy.ie/spa/images/0580e.svg"></img>
    <img src="https://www.diy.ie/spa/images/7bd44.svg"></img>
    <img src="https://www.diy.ie/spa/images/200e5.svg"></img>
    </div>
    <p>Your personal details are protected.</p>
    <p>Learn More</p>
    <div>
      <img src="https://www.diy.ie/spa/images/70ced.svg"></img>
      <img src="https://www.diy.ie/spa/images/95439.svg"></img>
      <img src="https://www.diy.ie/spa/images/e3e08.svg"></img>
    </div>
    <p>Helping you to buy</p>
    <p>Customer support team - 0373284628</p>
    
  </div>
</Col>
  
  </Row>

      </Container>

      
    </div>
  )
}

export default Cart
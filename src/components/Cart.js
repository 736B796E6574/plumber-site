import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "../styles/Cart.css"
function Cart() {
  return (
    <div>
      <Container className="cart-container" fluid>
        <Row>
          <Col className="d-flex flex-row cart-headers">
          <div className="d-flex flex-row cart-headers"><h1>My basket</h1><p className="item-count">1 Item</p></div>
          <p className="continue-p">⬅ <span className='continue-shopping'>Continue Shopping</span></p>
          <Row>
             
          </Row>

         </Col>
        <Col>
        
        </Col>
        </Row>
<Row>

    
  </Row>

      </Container>

      
    </div>
  )
}

export default Cart
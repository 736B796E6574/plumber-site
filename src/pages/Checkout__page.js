import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Checkout from '../components/Checkout';


function Checkout__page() {

    const stripePromise = loadStripe('pk_test_51M4L1EFi4agrg1XBsQv2IXiGIEVEOmnuzvxtmcJZn1iREdq3qxOUd2dBXlXsICw1rXpslVlgzCNvQ6Q6QWytwHXE00jHdOujuO');
  return (
    <div>
      <Elements stripe={stripePromise}>
        <Checkout />
      </Elements>
    </div>
  )
}

export default Checkout__page







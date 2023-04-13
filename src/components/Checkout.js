import React, { useMemo } from 'react';
import {
  CardElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';

const Checkout = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.error('[error]', error);
    } else {
      console.log('[PaymentMethod]', paymentMethod);
      // Process the payment (e.g., send the paymentMethod.id to your server)
    }
  };

  return (
    <div>
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <CardElement />
        <button type="submit" disabled={!stripe}>
          Pay
        </button>
      </form>
    </div>
  );
};

export default Checkout;

import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

import { PaymentFormContainer, FormContainer } from './payment-form.styles';

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handlePayment = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    try {
      const response = await fetch(
        '/.netlify/functions/create-payment-intent',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ amount: 10000 }),
        }
      ).then((res) => res.json());

      console.log(response);
      const clientSecret = response.paymentIntent.client_secret;
      // equivalent to above..^
      // const {
      //   paymentIntent: { client_secret },
      // } = response;

      const paymentResult = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            name: 'Jay Master',
          },
        },
      });

      if (paymentResult.error) {
        console.log(paymentResult.error);
      } else {
        if (paymentResult.paymentIntent.status === 'succeeded') {
          alert('Payment Successful');
        }
      }
    } catch (error) {
      console.log('Error in FE', { error });
    }
  };

  return (
    <PaymentFormContainer>
      <h2>Credit Card Payment: </h2>
      <FormContainer onSubmit={handlePayment}>
        <CardElement />
        <Button buttonType={BUTTON_TYPE_CLASSES.inverted}>Pay Now</Button>
      </FormContainer>
    </PaymentFormContainer>
  );
};

export default PaymentForm;

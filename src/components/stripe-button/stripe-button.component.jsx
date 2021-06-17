import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51J3L6KIIegNpvdSj0OmLGHE7N6UhcSfgMJYG3Vp5xlbrDvUXoi9Bne37e6yBevcZMTrrC5GRlNqESdHzjouMOKRW00lCR9w2vV'
    	
    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name= 'Crown Clothing'
            billingAddress
            shippingAddress
            image=''
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey = {publishableKey}
        />
    );
};

export default StripeCheckoutButton;
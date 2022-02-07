import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51KQQU8SHt9HKwcNgUwYGa5ur3USlFrLjuj9rvrR5nn2TgwNHDBTK1gTAuq1a1hwvJvOGvQh3nHScTi83fAbTPtO000op4N5ogP';


    const onToken = token => {
        console.log(token);
        alert('payment successful');
    }


    return (
        <StripeCheckout 
            label = 'Pay Now'
            name = 'CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image = 'https://svgshare.com/i/CUz.svg'
            description= {`Your total is $${price}` }
            amount={priceForStripe}
            panelLabel = 'Pay Now'
            token = {onToken}
            stripeKey = {publishableKey}
        />
    );
};

export default StripeCheckoutButton;
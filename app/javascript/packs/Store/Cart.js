import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const Cart = ({cart, onToken}) => (
    <div className="cart">
      Total: ${cart.total/100}
      {cart.total > 0 &&
        <StripeCheckout
          token={onToken}
          stripeKey="pk_test_71JVZVV9uaQiRATI7nMKen5E"
          description="Stickers from stickers.win"
          amount={cart.total}
          label="Checkout"
          billingAddress={true}
          shippingAddress={true} />
      }
    </div>
)

export default Cart

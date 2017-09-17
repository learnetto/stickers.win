import React from 'react'

const Cart = ({cart}) => (
  <div className="cart">
    Total: ${cart.total/100}
  </div>
)

export default Cart

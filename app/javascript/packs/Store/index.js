import React, { Component } from 'react'
import ProductsList from './ProductsList'
import Cart from './Cart'

class Store extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: this.props.products,
      cart: {
        items: [],
        total: 0
      }
    }
  }

  render () {
    return (
      <div>
        <Cart cart={this.state.cart} />
        <ProductsList products={this.state.products} />
      </div>
    )
  }
}

export default Store

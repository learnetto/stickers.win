import React, { Component } from 'react'
import Sticker from './Sticker'

class Product extends Component {
  render () {
    return(
      <div className="product">
        <Sticker product={this.props.product} />
        <div className="cartControls">
          <p className="price">${(this.props.product.skus.data[0].price/100).toFixed(2)}</p>
          <button>+ Add to cart</button>
          <button>- Remove from cart</button>
        </div>
      </div>
    )
  }
}

export default Product

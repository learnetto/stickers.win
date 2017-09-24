import React, { Component } from 'react'
import Sticker from './Sticker'

class Product extends Component {
  handleAdd = () => {
    this.props.handleAdd(this.props.product.skus.data[0])
  }

  handleRemove = () => {
    this.props.handleRemove(this.props.product.skus.data[0])
  }

  render () {
    return(
      <div className="product">
        <Sticker product={this.props.product} />
        <div className="cartControls">
          <p className="price">${(this.props.product.skus.data[0].price/100).toFixed(2)}</p>
          <button onClick={this.handleAdd}>+ Add to cart</button>
          <button onClick={this.handleRemove}>- Remove from cart</button>
        </div>
      </div>
    )
  }
}

export default Product

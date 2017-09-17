import React from 'react'

const Product = ({product}) => 
  <div className="product">
    <h2>{product.name}</h2>
    <h3>{product.caption}</h3>
    <div className="sticker">
      <img src={product.images[0]} alt={product.name} />
    </div>
    <h3>Free shipping anywhere in the world!</h3>
  </div>

export default Product

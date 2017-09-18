import React from 'react'

const Sticker = ({product}) => 
  <div className="stickerContainer">
    <h2>{product.name}</h2>
    <h3>{product.caption}</h3>
    <div className="sticker">
      <img src={product.images[0]} alt={product.name} />
    </div>
    <h3>Free shipping anywhere in the world!</h3>
  </div>

export default Sticker

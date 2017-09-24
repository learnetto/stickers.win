import React from 'react'
import Product from './Product'

const ProductsList = ({products, handleAdd, handleRemove}) =>
  <div>
    {products.map(product => {
      return(<Product key={product.id} product={product}
              handleAdd={handleAdd} handleRemove={handleRemove} />)
    })}
  </div>

export default ProductsList

import React from 'react'
import Product from './Product'

const ProductsList = ({products}) =>
  <div>
    {products.map(product => {
      return(<Product key={product.id} product={product} />)
    })}
  </div>

export default ProductsList

import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Store from './Store'

class App extends Component {
  render () {
    return (
      <div>
        <Store products={this.props.products} />
      </div>
    )
  }
}

export default App

document.addEventListener('DOMContentLoaded', () => {
  const node = document.getElementById('store_data')
  const products = JSON.parse(node.getAttribute('data-products')).data
  ReactDOM.render(<App products={products} />, document.getElementById('store'))
})

import React, { Component } from 'react'
import Home from './Home'
import NavBar from '../components/NavBar'
import Cart from '../components/Cart'
class App extends Component {

  render() {
    return (
      <div className='relative'>
        <NavBar className="absolute" />
        <Cart />
        <div className='tw-m-6'>
          <h1 className='tw-text-3xl tw-font-bold tw-mb-4'>Shopify Store</h1>
          <Home />
          <div>Footter</div>
        </div>
      </div>
    )
  }
}

export default App
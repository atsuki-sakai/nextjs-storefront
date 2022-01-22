import React, { Component } from 'react'
import Home from './Home'
import NavBar from '../components/NavBar'
import Cart from '../components/Cart'
import NavMenu from '../components/NavMenu'
import Drawer from '../components/Drawer'
class App extends Component {

  render() {
    return (
      <>
        <NavMenu />
        <Drawer />
        <div className='tw-m-6'>
          <h1 className='tw-text-3xl tw-font-bold tw-mb-4'>Shopify Store</h1>
          <Home />
          <div>Footter</div>
        </div>
      </>
    )
  }
}

export default App
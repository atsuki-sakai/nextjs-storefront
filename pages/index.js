import React, { Component } from 'react'
import Home from './Home'
import NavBar from '../components/NavBar'
class App extends Component {

  render() {
    return (
      <>
        <NavBar />
        <div className='m-6'>
          <h1 className='text-3xl font-bold mb-4'>Shopify Store</h1>
          <Home />
          <div>Footter</div>
        </div>
      </>
    )
  }
}

export default App
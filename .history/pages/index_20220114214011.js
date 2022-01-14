import React, { Component } from 'react'
import Home from './Home'
class App extends Component {

  render() {
    return (
      <div>
        <NavBar />
        <div className='m-6'>
          <h1 className='text-3xl font-bold mb-4'>Shopify Store</h1>
          <Home />
          <div>Footter</div>
        </div>
      </div>
    )
  }
}

export default App
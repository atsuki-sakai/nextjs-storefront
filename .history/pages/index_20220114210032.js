import React, { Component } from 'react'
import Home from './Home'
import NavBar from '../components/NavBar'
import Head from 'next/head'
class App extends Component {

  render() {
    return (
      <>
        <Head>
          <html lang='ja'></html>
          <title>Wealthy Store</title>
          <description>
            wealthy store is low price market.
          </description>
        </Head>
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
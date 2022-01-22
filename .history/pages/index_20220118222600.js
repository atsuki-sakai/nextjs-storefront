import React, { Component } from 'react'
import Home from './Home'
import NavBar from '../components/NavBar'
import Cart from '../components/Cart'
import NavMenu from '../components/NavMenu'
const App = () => {

  const setIsOpen = useSetRecoilState(isDrawerOpenState)
  return (
    <>
      <div>
        <div className='tw-h-64 tw-w-full'>
          <button onClick={() => setIsOpen(true)}> Hello </button>
        </div>
        <Drawer />
      </div>
      {/* <NavBar />
      <div className='tw-m-6'>
        <h1 className='tw-text-3xl tw-font-bold tw-mb-4'>Shopify Store</h1>
        <Home />
        <div>Footter</div>
      </div> */}
    </>
  )

}

export default App
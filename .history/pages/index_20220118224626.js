import React, { Component } from 'react'
import Home from './Home'
import NavBar from '../components/NavBar'
import Cart from '../components/Cart'
import NavMenu from '../components/NavMenu'
import { useDisclosure } from '@chakra-ui/react'

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Input,
} from '@chakra-ui/react'

const App = () => {

  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
    <>

      <NavBar toggleDrawer={onOpen} />
      <div className='tw-m-6'>
        <h1 className='tw-text-3xl tw-font-bold tw-mb-4'>Shopify Store</h1>
        <Home />
        <div>Footter</div>
      </div>

      <Cart isOpen={isOpen} onOpen={onOpen} onClose={onClose} btnRef={btnRef} />
    </>
  )

}

export default App
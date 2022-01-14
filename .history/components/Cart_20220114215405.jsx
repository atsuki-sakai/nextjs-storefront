import React, { useState, useContext } from 'react'
import { F_ShopContext } from './F_ShopProvider'

import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
} from '@chakra-ui/react'

const Cart = () => {

    const { isCartOpen, closeCart, openCart, checkout, removeLineItem } = useContext(F_ShopContext)

    return (
        <>
            <Button colorScheme='teal' onClick={openCart}>
                Open
            </Button>
            <Drawer
                isOpen={isCartOpen}
                placement='right'
                onClose={closeCart}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Your Shopping Cart.</DrawerHeader>
                    <DrawerBody>
                        This is your cart
                    </DrawerBody>
                    <DrawerFooter>
                        <Button >Checkout</Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>

        </>
    )
}

export default Cart

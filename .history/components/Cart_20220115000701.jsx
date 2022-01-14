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
    { console.log("Cart") }

    const { isCartOpen, closeCart, checkout, removeLineItem } = useContext(F_ShopContext)

    return (
        <div>
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

        </div>
    )
}

export default Cart

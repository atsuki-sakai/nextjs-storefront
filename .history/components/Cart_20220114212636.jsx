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
} from '@chakra-ui/react'

const Cart = () => {

    const { isCarOpen, closeCart, checkout, removeLineItem } = useContext(F_ShopContext)

    return (
        <>
            <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
                Open
            </Button>
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
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

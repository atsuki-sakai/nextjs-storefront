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
    Input,
} from '@chakra-ui/react'
import NavMenu from './NavMenu'


const Cart = (props) => {

    const { isOpen, onClose, btnRef } = props
    const { isCartOpen, closeCart, checkout, removeLineItem } = useContext(F_ShopContext)

    return (
        <>
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <NavMenu />
                </DrawerContent>
            </Drawer>

        </>
    )
}

export default Cart

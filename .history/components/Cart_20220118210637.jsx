import React, { useState, useContext } from 'react'
import { F_ShopContext } from './F_ShopProvider'


const Cart = () => {
    { console.log("Cart") }

    const { isCartOpen, closeCart, checkout, removeLineItem } = useContext(F_ShopContext)

    return (
        <>

        </>
    )
}

export default Cart

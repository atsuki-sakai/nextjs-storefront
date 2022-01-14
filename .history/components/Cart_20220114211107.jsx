import React, { useState } from 'react'

const Cart = () => {
    const [isOpen, toggleIsOpen] = useState(false);
    const toggle = () => {
        toggleIsOpen(!isOpen)
    }
    return (
        <>
        </>
    )
}

export default Cart

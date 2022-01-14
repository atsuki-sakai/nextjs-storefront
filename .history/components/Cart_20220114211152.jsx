import React, { useState } from 'react'

const Cart = () => {
    const [isOpen, toggleIsOpen] = useState(false);
    const toggle = () => {
        toggleIsOpen(!isOpen)
    }

    return (
        <>
            <button onClick={toggleDrawer}>Show</button>
            <Drawer open={isOpen} onClose={toggleDrawer} direction='left'>
                <div>Hello World</div>
            </Drawer>
        </>
    )
}

export default Cart

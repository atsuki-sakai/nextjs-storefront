import { ShoppingCart, Menu } from 'react-feather'
import { F_ShopContext } from './F_ShopProvider'
import React, { useContext } from 'react'

const NavBar = () => {
    const { openCart, openMenu, checkout } = useContext(F_ShopContext)
    return (
        <div className='flex justify-between mb-4 py-4 px-8 bg-pink-400 items-center'>
            <img src='/images/logo.png' width="82" height="82"></img>
            <div className='flex'>
                <ShoppingCart color='white' size={28} />
                <Menu onClick={() => openCart()} className='ml-8' color='white' size={28} />
            </div>
        </div>
    )
}

export default NavBar

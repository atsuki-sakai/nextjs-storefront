import { ShoppingCart, Menu } from 'react-feather'
import React, { useContext } from 'react'
import Link from 'next/link'
import { F_ShopContext } from './F_ShopProvider';

const NavBar = (props) => {

    const { toggleDrawer } = props;
    const { openCart, openMenu, checkout } = useContext(F_ShopContext)

    return (
        <>
            <div className='tw-flex tw-justify-between tw-mb-4 tw-py-4 tw-px-8 tw-bg-pink-400 tw-items-center'>
                <Link href={'/'}>
                    <img src='/images/logo.png' width="82" height="82"></img>
                </Link>
                <div className='tw-flex'>
                    <ShoppingCart color='white' size={28} />
                    <Menu onClick={() => toggleDrawer()} className='tw-ml-8' color='white' size={28} />
                </div>
            </div>
        </>
    )
}

export default NavBar

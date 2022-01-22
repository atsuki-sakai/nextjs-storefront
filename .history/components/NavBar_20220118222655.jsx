import { ShoppingCart, Menu } from 'react-feather'
import React, { useContext } from 'react'
import Link from 'next/link'

const NavBar = () => {

    return (
        <>
            <div className='tw-flex tw-justify-between tw-mb-4 tw-py-4 tw-px-8 tw-bg-pink-400 tw-items-center'>
                <Link href={'/'}>
                    <img src='/images/logo.png' width="82" height="82"></img>
                </Link>
                <div className='tw-flex'>
                    <ShoppingCart color='white' size={28} />
                    <Menu onClick={() => { console.log('tap menu button') }} className='tw-ml-8' color='white' size={28} />
                </div>
            </div>
            <Drawer />
        </>
    )
}

export default NavBar

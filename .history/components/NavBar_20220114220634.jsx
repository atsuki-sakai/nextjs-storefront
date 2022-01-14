import { ShoppingCart, Menu } from 'react-feather'
import { F_ShopContext } from './F_ShopProvider'
import { useContext } from 'react'

const NavBar = () => {

    const { openCart } = useContext(F_ShopContext)
    return (
        <div className='flex justify-between mb-4 py-4 px-8 bg-pink-400 items-center'>
            <img src='/images/logo.png' width="82" height="82"></img>
            <div className='flex'>
                <ShoppingCart color='white' size={28} />
                <button>
                    <Menu onClick={() => { openCart() }} className='ml-8' color='white' size={28} />
                </button>
            </div>
        </div>
    )
}

export default NavBar

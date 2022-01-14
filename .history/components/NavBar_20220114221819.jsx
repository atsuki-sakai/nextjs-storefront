import { ShoppingCart, Menu } from 'react-feather'

const NavBar = () => {
    return (
        <div className='flex justify-between mb-4 py-4 px-8 bg-pink-400 items-center'>
            <img src='/images/logo.png' width="82" height="82"></img>
            <div className='flex'>
                <ShoppingCart color='white' size={28} />
                <Menu className='ml-8' color='white' size={28} />
            </div>
        </div>
    )
}

export default NavBar

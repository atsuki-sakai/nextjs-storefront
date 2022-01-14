import React, { useState, useEffect } from 'react'
import Client from 'shopify-buy'

const client = Client.buildClient({
    domain: process.env.NEXT_PUBLIC_REACT_APP_SHOPIFY_DOMAIN,
    storefrontAccessToken: process.env.NEXT_PUBLIC_REACT_APP_SHOPIFY_API
});

const F_ShopContext = React.createContext()

const F_ShopProvider = (props) => {

    const { children } = props
    const [state, setState] = useState()// 初期値

    const createCheckout = async () => {
        try {
            const checkout = await client.checkout.create();
            // localStorage: ローカルにデータを保存。Cookieのような物？
            localStorage.setItem('checkout_id', checkout.id)
            setState({ checkout })
        } catch (e) {
            console.log(e)
        }
    }
    const fetchCheckout = async (checkoutId) => {
        try {
            const checkout = await client.checkout.fetch(checkoutId)
            setState({ checkout })
        } catch (e) {
            console.log(e)
        }
    }
    const addItemtoCheckout = async () => { }
    const removeLineItem = async (lineITemIdstoRemove) => { }

    const fetchAllProducts = async () => {
        try {
            const products = await client.product.fetchAll();
            setState({ products })
        } catch (e) {
            console.log(e)
        }

    }
    const fetchProductWithHandle = async (handle) => {
        try {
            const product = await client.product.fetchByHandle(handle);
            setState({ product })
        } catch (e) {

            console.log(e)
        }
    }
    const closeCart = () => { setState({ isCartOpen: false }) }
    const openCart = () => { setState({ isCartOpen: true }) }
    const closeMenu = () => { setState({ isMenuOpen: false }) }
    const openMenu = () => { setState({ isMenuOpen: true }) }


    useEffect(() => {
        if (localStorage.checkout_id) {

        } else {
            createCheckout()
        }
    }, [])

    return (

        <F_ShopContext.Provider value={{
            ...state,
            fetchAllProducts: fetchAllProducts,
            fetchProductWithHandle: fetchProductWithHandle,
            addItemtoCheckout: addItemtoCheckout,
            removeLineItem: removeLineItem,
            closeCart: closeCart,
            openCart: openCart,
            closeMenu: closeMenu,
            opneMenu: openMenu,
        }}>
            {children}
        </F_ShopContext.Provider>
    )
}

const F_ShopConsumer = F_ShopContext.Consumer
export { F_ShopContext, F_ShopConsumer }
export default F_ShopProvider



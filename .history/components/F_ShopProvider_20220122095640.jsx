import React, { useState, useEffect } from 'react'
import Client from 'shopify-buy'

const client = Client.buildClient({
    domain: process.env.NEXT_PUBLIC_REACT_APP_SHOPIFY_DOMAIN,
    storefrontAccessToken: process.env.NEXT_PUBLIC_REACT_APP_SHOPIFY_API
});

const F_ShopContext = React.createContext()

const F_ShopProvider = (props) => {
    { console.log("F_ShopProvider") }

    const { children } = props

    const [product, setProduct] = useState({})
    const [products, setProducts] = useState([])
    const [checkout, setCheckout] = useState({})
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const createCheckout = async () => {
        try {
            const checkout = await client.checkout.create();
            // localStorage: ローカルにデータを保存。Cookieのような物？
            localStorage.setItem('checkout_id', checkout.id)
            setCheckout(checkout)
        } catch (e) {
            console.log("error: cerateCheckout", e)
        }
    }
    const fetchCheckout = async (checkoutId) => {
        try {
            const checkout = await client.checkout.fetch(checkoutId)
            setCheckout(checkout)
        } catch (e) {
            console.log(e)
        }
    }
    const addItemtoCheckout = async () => { }
    const removeLineItem = async (lineITemIdstoRemove) => { }

    const fetchAllProducts = async () => {
        try {
            const products = await client.product.fetchAll();
            setProducts(products)
        } catch (e) {
            console.log("error: fetchAllProducts", e)
        }

    }

    const fetchByHandle = async (handle) => {
        try {
            const product = await client.product.fetchByHandle(handle);
            setProduct(product)
        } catch (e) {

            console.log(e)
        }
    }
    const closeCart = () => { setIsCartOpen(false), console.log('closeCart') }
    const openCart = () => { setIsCartOpen(true), console.log('openCart') }
    const closeMenu = () => { setIsMenuOpen(false), console.log('closeMenu') }
    const openMenu = () => { setIsMenuOpen(true), console.log('openMenu') }


    useEffect(() => {
        if (localStorage.checkout_id) {

        } else {
            createCheckout()
        }
    }, [])

    return (

        <F_ShopContext.Provider value={{
            product: product,
            products: products,
            checkout: checkout,
            isMenuOpen: isMenuOpen,
            isCartOpen: isCartOpen,
            fetchAllProducts: fetchAllProducts,
            fetchByHandle: fetchByHandle,
            addItemtoCheckout: addItemtoCheckout,
            removeLineItem: removeLineItem,
            closeCart: closeCart,
            openCart: openCart,
            closeMenu: closeMenu,
            openMenu: openMenu,
        }}>
            {children}
        </F_ShopContext.Provider>
    )
}

const F_ShopConsumer = F_ShopContext.Consumer
export { F_ShopContext, F_ShopConsumer }
export default F_ShopProvider



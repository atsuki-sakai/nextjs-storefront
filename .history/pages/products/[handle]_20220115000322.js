// rafce
import React, { useEffect, useContext } from 'react'
import { F_ShopContext } from '../../components/F_ShopProvider'
import { useRouter } from 'next/router'
import NavBar from '../../components/NavBar'

const ProductPage = () => {

    { console.log("handle") }
    const router = useRouter()
    const { handle } = router.query

    console.log("handle:", handle)
    const { fetchByHandle, addItemToCheckout, product } = useContext(F_ShopContext)

    useEffect(() => {
        fetchByHandle(handle)
    }, [handle]);// ループする。
    if (!product) return <div>Loading now...</div>


    return (
        <>
            <NavBar />
            <div>
                <h1>{product.title}</h1>
            </div>
        </>
    )
}

export default ProductPage

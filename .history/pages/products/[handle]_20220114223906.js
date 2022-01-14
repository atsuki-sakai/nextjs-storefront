// rafce
import React, { useEffect, useContext } from 'react'
import { F_ShopContext } from '../../components/F_ShopProvider'
import { useRouter } from 'next/router'

const ProductPage = () => {

    const router = useRouter()
    const { handle } = router.query

    console.log("handle:", handle)
    const { fetchProductWithHandle, addItemToCheckout, product } = useContext(F_ShopContext)

    useEffect(() => {
        fetchProductWithHandle(handle)
    }, [fetchProductWithHandle, handle]);
    if (!product) return <div>Loading now...</div>


    return (
        <>
            <div>
                <h1>{product.title}</h1>
            </div>
        </>
    )
}

export default ProductPage

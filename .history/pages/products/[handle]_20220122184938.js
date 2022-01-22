// rafce
import React, { useEffect, useContext } from 'react'
import { F_ShopContext } from '../../components/F_ShopProvider'
import { useRouter } from 'next/router'
import NavBar from '../../components/NavBar'
import Link from 'next/link'
import Image from 'next/image'

const ProductPage = () => {

    { console.log("handle.js") }

    const router = useRouter()
    const { handle } = router.query

    console.log("handle:", handle)
    const { fetchByHandle, addItemToCheckout, product } = useContext(F_ShopContext)
    useEffect(() => {
        fetchByHandle(handle)
    }, [handle]);// ループする。
    if (!product) return <div>Loading now...</div>

    console.log("product", product)

    return (
        <>
            <div>{product.title}</div>
        </>
    )
}

export default ProductPage

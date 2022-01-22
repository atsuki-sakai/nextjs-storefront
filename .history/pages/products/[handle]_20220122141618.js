// rafce
import React, { useEffect, useContext } from 'react'
import { F_ShopContext } from '../../components/F_ShopProvider'
import { useRouter } from 'next/router'
import NavBar from '../../components/NavBar'
import Link from 'next/link'
import Image from 'next/image'

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
    console.log(product)


    return (
        <>
            <NavBar />
            <div className=' tw-bg-gray-200 tw-p-8 tw-shadow-xl tw-rounded-l tw-mx-48'>
                <div className='tw-flex tw-justify-center '>
                    <div className='tw-h-124 tw-w-124 tw-relative'>
                        <Link href={`/products/${product.handle}`}>
                            <a>
                                <Image className='' src={product.images[0].src} alt={product.title} layout='fill' objectFit='cover' />
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="tw-m-16">
                    <h1 className='tw-font-bold tw-text-3xl tw-text-clip tw-w-auto'>{product.title}</h1>
                    <p className='tw-mt-4 tw-text-3xl'>¥ {product.price}</p>
                </div>
            </div>
        </>
    )
}

export default ProductPage

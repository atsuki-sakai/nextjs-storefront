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
    console.log(product)


    return (
        <>
            <NavBar />
            <div className=' tw-bg-gray-200 tw-p-8 tw-shadow-xl tw-rounded-l tw-mx-32'>
                <div className='tw-flex tw-justify-center '>
                    <div className='tw-h-96 tw-w-96 tw-relative'>
                        <Link href={`/products/${product.handle}`}>
                            <a>
                                <Image className='' src={product.images[0].image.src} alt={product.title} layout='fill' objectFit='cover' />
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="tw-m-4">
                    <h1 className='tw-font-bold tw-text-l tw-text-clip tw-w-96'>{product.title}</h1>
                    <p className='tw-mt-4 tw-text-3xl'>¥ {product.title}</p>
                </div>
                {product.title}
            </div>
        </>
    )
}

export default ProductPage

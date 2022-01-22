import React, { useContext, useEffect } from 'react'
import { F_ShopContext } from '../components/F_ShopProvider'
import Image from 'next/image'
import Link from 'next/link'
// 関数コンポーネントでprops,childrenを使用
const Home = () => {
    { console.log("Home") }

    const { fetchAllProducts, products } = useContext(F_ShopContext);

    // マウントされる際に呼ばれる。componentDidMount()と似ている。useEffect(関数,[変数])、変数の値が変更されると関数が呼ばれる。
    useEffect(() => {
        fetchAllProducts()
    }, [fetchAllProducts])// [fetchAllProducts]から変更。

    if (!products) return <div>Loadings now...</div>

    return (
        <>
            <h3 className=' tw-text-xl tw-font-bold'>Products</h3>

            <div className='tw-grid tw-grid-cols-3 tw-gap-4 tw-place-items-center tw-m-8'>
                {
                    products.map(product => (
                        <div className=' tw-bg-gray-200 tw-p-8 tw-shadow-xl tw-rounded-l '>
                            <div className='tw-flex tw-justify-center '>
                                <div className='tw-h-96 tw-w-96 tw-relative'>
                                    <Link href={`/products/${product.handle}`}>
                                        <a>
                                            <Image className='' src={product.variants[0].image.src} alt={product.title} layout='fill' objectFit='cover' />
                                        </a>
                                    </Link>
                                </div>
                            </div>
                            <div className="tw-m-4">
                                <h1 className='tw-font-bold tw-text-l tw-text-clip tw-w-96'>{product.title}</h1>
                                <p className='tw-mt-4 tw-text-3xl'>¥ {product.variants[0].price}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Home

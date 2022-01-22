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
    }, [])// [fetchAllProducts]から変更。必要なさそう。

    if (!products) return <div>Loadings now...</div>

    return (
        <>
            <h3 className=' tw-text-xl tw-font-bold'>Products</h3>
            <div className='tw-bg-gray-400'>
                {
                    products.map(product => (
                        <div className='tw-bg-yellow-300 mr-12'>
                            <div className='tw-flex tw-items-top tw-mt-8' key={product.id}>
                                <Link href={`/products/${product.handle}`}>
                                    <a>
                                        <Image className='tw-rounded-2xl tw-w-2/5' src={product.variants[0].image.src} width={220} height={220} alt={product.title} />
                                    </a>
                                </Link>
                                <div className='tw-m-4'>
                                    <h1 className='tw-font-bold tw-text-l tw-text-clip tw-w-80'>{product.title}</h1>
                                    <p className='tw-mt-4'>¥ {product.variants[0].price}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Home

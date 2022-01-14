import React, { useContext, useEffect } from 'react'
import { F_ShopContext } from '../components/F_ShopProvider'
import Image from 'next/image'
import Link from 'next/link'
// 関数コンポーネントでprops,childrenを使用
const Home = memo(() => {

    const { fetchAllProducts, products } = useContext(F_ShopContext);

    // マウントされる際に呼ばれる。componentDidMount()と似ている。useEffect(関数,[変数])、変数の値が変更されると関数が呼ばれる。
    useEffect(() => {
        fetchAllProducts()
    }, [fetchAllProducts])// [fetchAllProducts]から変更。必要なさそう。

    if (!products) return <div>Loadings now...</div>

    return (
        <>
            <h3 className=' text-xl font-bold'>Products</h3>
            {
                products.map(product => (
                    <div className='flex items-top mt-8' key={product.id}>
                        <Link href={`/products/${product.handle}`}>
                            <a>
                                <Image className='rounded-2xl w-2/5' src={product.variants[0].image.src} width={220} height={220} alt={product.title} />
                            </a>
                        </Link>
                        <div className='m-4'>
                            <h1 className='font-bold text-l text-clip w-80'>{product.title}</h1>
                            <p className='mt-4'>¥ {product.variants[0].price}</p>
                        </div>
                    </div>
                ))
            }
        </>
    )
})

export default Home

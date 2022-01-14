import React from 'react'
import ShopProvider from '../components/ShopProvider'
import F_ShopProvider from '../components/F_ShopProvider'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <>
    <F_ShopProvider>
      <Component {...pageProps} />
    </F_ShopProvider>
  </>

}

export default MyApp

// ここでShopProviderで包む事で全体からShopContextにアクセスできる。

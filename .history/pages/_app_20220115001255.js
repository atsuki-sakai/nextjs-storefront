import React from 'react'
import F_ShopProvider from '../components/F_ShopProvider'
import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {

  { console.log("_app.js") }
  return <>
    <Head>
      <title>Wealthy Store</title>
      <meta name="description" content="hello world"></meta>
    </Head>
    <F_ShopProvider>
      <Component {...pageProps} />
    </F_ShopProvider>
  </>

}

export default MyApp

// ここでShopProviderで包む事で全体からShopContextにアクセスできる。

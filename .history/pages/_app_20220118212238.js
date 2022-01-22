import React from 'react'
import F_ShopProvider from '../components/F_ShopProvider'
import { RecoilRoot } from 'recoil'
import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {

  { console.log("_app.js") }
  return <>
    <Head>
      <title>Wealthy Store</title>
      <meta name="description" content="hello world"></meta>
    </Head>
    <RecoilRoot>

      <F_ShopProvider>
        <Component {...pageProps} />
      </F_ShopProvider>
    </RecoilRoot>
  </>

}

export default MyApp

// ここでShopProviderで包む事で全体からShopContextにアクセスできる。

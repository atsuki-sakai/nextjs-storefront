import React from 'react'
import { ChacraProvider } from '@chakra-ui/react'
import F_ShopProvider from '../components/F_ShopProvider'
import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return <>
    <ChacraProvider>
      <Head>
        <title>Wealthy Store</title>
        <meta name='description' content='this site is low price market.' />
      </Head>
      <F_ShopProvider>
        <Component {...pageProps} />
      </F_ShopProvider>
    </ChacraProvider>
  </>

}

export default MyApp

// ここでShopProviderで包む事で全体からShopContextにアクセスできる。

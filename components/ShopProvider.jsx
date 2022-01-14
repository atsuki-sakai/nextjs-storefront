import React, { Component } from 'react'
import Client from 'shopify-buy'

// contextを作成、Context.Providerを使うことで配下のコンポーネントからアクセスできる。
const ShopContext = React.createContext()// 引数に初期値を持たせられる。

//Shopify-Buy-SDKの認証
const client = Client.buildClient({
    // *POINT* NEXT_PUBLIC_をプレフィックスで付与しないとクライアントサイドで環境変数が読み込まれない。
    domain: process.env.NEXT_PUBLIC_REACT_APP_SHOPIFY_DOMAIN,
    storefrontAccessToken: process.env.NEXT_PUBLIC_REACT_APP_SHOPIFY_API
});

// クラスコンポーネント、componentDidMount()などstateなどが使える。
class ShopProvider extends Component {

    // MEMO -  要理解
    state = {
        product: {},
        products: [],
        checkout: {},
        isCartOpen: false,
        isMenuOpen: false,
    }
    // * マウント: 画面にコンポーネントがレンダリングされる事 *
    //マウント後に呼び出される。
    componentDidMount() {
        if (localStorage.checkout_id) {

        } else {
            this.createCheckout();
        }
    }

    createCheckout = async () => {
        try {
            const checkout = await client.checkout.create();
            // localStorage: ローカルにデータを保存。Cookieのような物？
            localStorage.setItem('checkout_id', checkout.id)
            this.setState({ checkout: checkout })
        } catch (e) {
            console.log(e)
        }
    }
    fetchCheckout = async (checkoutId) => {
        try {
            const checkout = await client.fetchCheckout(checkoutId)
            this.setState({ checkout: checkout })
        } catch (e) {
            console.log(e)
        }
    }
    addItemtoCheckout = async () => { }
    removeLineItem = async (lineITemIdstoRemove) => { }

    fetchAllProducts = async () => {
        try {
            const products = await client.product.fetchAll();
            this.setState({ products });
        } catch (e) {
            console.log(e)
        }

    }
    fetchAllProductWithHandle = async (handle) => {
        try {
            const product = await client.fetchAllProductWithHandle(handle);
            this.setState({ product: product });
        } catch (e) {

        }
    }
    closeCart = () => { }
    openCart = () => { }
    closeMenu = () => { }
    openMenu = () => { }

    render() {
        return (
            // valueに値を渡すとその値が子孫であるコンポーネントで使える。
            // 一つ目{javascript}、二つ目{オブジェクト}でスプレッド構文でstateを展開。
            <ShopContext.Provider value={{
                ...this.state,
                fetchAllProducts: this.fetchAllProducts,
                fetchProductWithHandle: this.fetchAllProductWithHandle,
                addItemtoCheckout: this.addItemtoCheckout,
                removeLineItem: this.removeLineItem,
                closeCart: this.closeCart,
                openCart: this.openCart,
                closeMenu: this.closeMenu,
                opneMenu: this.openMenu,
            }}>
                {this.props.children}
            </ShopContext.Provider >
        )
    }

}

// ShopContextの変更を購読する為のConsumerコンポーネント。
const ShopConsumer = ShopContext.Consumer
export { ShopConsumer, ShopContext }

export default ShopProvider

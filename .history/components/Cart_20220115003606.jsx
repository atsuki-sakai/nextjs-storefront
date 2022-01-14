import React, { useState, useContext } from 'react'
import { F_ShopContext } from './F_ShopProvider'


const Cart = () => {
    { console.log("Cart") }

    const { isCartOpen, closeCart, checkout, removeLineItem } = useContext(F_ShopContext)

    return (
        <>
            <div className="tw-rounded-lg tw-shadow tw-bg-base-200 drawer tw-h-52">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="tw-flex tw-flex-col tw-items-center tw-justify-center drawer-content">
                    <label onClick={() => isCartOpen()} for="my-drawer" className="btn btn-primary drawer-button">open menu</label>
                </div>
                <div className="drawer-side">
                    <label for="my-drawer" className="drawer-overlay"></label>
                    <ul className="menu tw-p-4 tw-overflow-y-auto tw-w-80 tw-bg-base-100 tw-text-base-content">
                        <li>
                            <a>Menu Item</a>
                        </li>
                        <li>
                            <a>Menu Item</a>
                        </li>
                    </ul>
                </div>
            </div>


        </>
    )
}

export default Cart

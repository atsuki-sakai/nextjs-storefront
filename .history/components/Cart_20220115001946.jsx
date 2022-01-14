import React, { useState, useContext } from 'react'
import { F_ShopContext } from './F_ShopProvider'


export const Cart = () => {
    { console.log("Cart") }

    const { isCartOpen, closeCart, checkout, removeLineItem } = useContext(F_ShopContext)

    return (
        <>
            <div class="rounded-lg shadow bg-base-200 drawer h-52">
                <input id="my-drawer" type="checkbox" class="drawer-toggle" />
                <div class="flex flex-col items-center justify-center drawer-content">
                    <label onClick={() => isCartOpen()} for="my-drawer" class="btn btn-primary drawer-button">open menu</label>
                </div>
                <div class="drawer-side">
                    <label for="my-drawer" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
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

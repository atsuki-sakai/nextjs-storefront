import React from 'react'

const NavMenu = () => {
    return (
        <div>
            <div className="tw-drawer tw-h-52 ">
                <input id="my-drawer" type="checkbox" className="tw-drawer-toggle" />
                <div className="tw-drawer-content tw-bg-yellow-100">
                    <label for="my-drawer" className="tw-drawer-button ">open menu</label>
                </div>
                <div className="tw-drawer-side">
                    <label for="my-drawer" className="tw-drawer-overlay"></label>
                    <ul className="">
                        <li>
                            <a>Menu Item</a>
                        </li>
                        <li>
                            <a>Menu Item</a>
                        </li>
                        <li>
                            <a>Menu Item</a>
                        </li>
                        <li>
                            <a>Menu Item</a>
                        </li>
                        <li>
                            <a>Menu Item</a>
                        </li>
                        <li>
                            <a>Menu Item</a>
                        </li>
                        <li>
                            <a>Menu Item</a>
                        </li>
                        <li>
                            <a>Menu Item</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NavMenu

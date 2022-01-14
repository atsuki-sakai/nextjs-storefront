import React from 'react'

const NavMenu = () => {
    return (
        <div>
            <div className="tw-rounded-lg tw-shadow tw-bg-base-200 tw-drawer tw-h-52 absolute left-52 top-52">
                <input id="my-drawer" type="checkbox" className="tw-drawer-toggle" />
                <div className="tw-flex tw-flex-col tw-items-end tw-justify-center tw-drawer-content">
                    <label for="my-drawer" className="tw-btn tw-btn-primary tw-drawer-button">open menu</label>
                </div>
                <div className="tw-drawer-side">
                    <label for="my-drawer" className="tw-drawer-overlay"></label>
                    <ul className="tw-menu tw-p-4 tw-overflow-y-auto tw-w-80 tw-bg-base-100 tw-text-base-content">
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

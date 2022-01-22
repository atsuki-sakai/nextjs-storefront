import React from 'react'

const NavMenu = (props) => {
    const { setIsDrawerOpen } = props;
    return (
        <div className="tw-rounded-lg tw-shadow tw-bg-base-200 tw-drawer tw-h-52">
            <input id="my-drawer" type="checkbox" className="tw-drawer-toggle" />
            <div className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-drawer-content">
                <label for="my-drawer" className="tw-btn tw-btn-primary tw-drawer-button" onClick={setIsDrawerOpen}>open menu</label>
            </div>
        </div>
    )
}

export default NavMenu

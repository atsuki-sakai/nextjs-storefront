import React from 'react'

const NavMenu = (props) => {

    const { onClose } = props
    return (
        <div>
            <button className='' onClick={() => onClose()}>close</button>
        </div>
    )
}

export default NavMenu

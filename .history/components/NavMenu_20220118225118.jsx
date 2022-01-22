import React from 'react'

const NavMenu = (props) => {

    const { onClose } = props
    return (
        <div>
            <button className='' onClick={() => onClose()}>Close</button>
        </div>
    )
}

export default NavMenu

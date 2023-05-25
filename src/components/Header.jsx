import React from 'react'

import Navbar from './containers/navbar/Navbar'
import Main from './Main'

const Header = () => {
    return (
        <>
            <div>
                <Navbar />
                <Main />
            </div>
        </>
    )
}

export default Header
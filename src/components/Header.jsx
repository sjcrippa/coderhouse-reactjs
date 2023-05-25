import React from 'react'

import Navbar from './containers/navbar/Navbar'
import Main from './Main'
import ItemListContainer from './containers/itemListContainer/ItemListContainer'

const Header = () => {
    return (
        <>
            <div>
                <Main />
                <ItemListContainer />
            </div>
        </>
    )
}

export default Header
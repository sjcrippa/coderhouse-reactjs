import React from 'react';

import Main from './Main';
import ItemListContainer from './containers/itemListContainer/ItemListContainer';

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

export default Header;
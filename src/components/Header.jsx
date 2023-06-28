import React from 'react';

import Main from './Main';
import ItemListContainer from './containers/itemListContainer/ItemListContainer';
import Article from './containers/articles/Article';

const Header = () => {
    return (
        <>
            <div>
                <Main />
                <Article />
                <ItemListContainer />
            </div>
        </>
    )
}

export default Header;
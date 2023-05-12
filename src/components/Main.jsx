import React from 'react';

import ItemListContainer from './containers/ItemListContainer';
import BtnForCounter from './containers/BtnForCounter';
import Clase6 from './clases/clase6/Clase6';
/* import Clase5 from './clases/clase5/Clase5';
import Efectos from './clases/clase5/Efectos';
import Efectos2 from './clases/clase5/Efectos2'; */

const Main = () => {

    return (
        <>
            <ItemListContainer />
            <BtnForCounter />
            {/* <Clase5 />
            <Efectos />
            <Efectos2 /> */}
            <Clase6 />
        </>
    )
}

export default Main
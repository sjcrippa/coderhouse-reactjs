import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Footer from './components/Footer';
import Error from './components/Error';
import Header from './components/Header';
import Navbar from './components/containers/navbar/Navbar';
import Cart from './components/Cart';
import ItemListContainer from './components/containers/itemListContainer/ItemListContainer';
import ItemDetailContainer from './components/containers/itemDetail/ItemDetailContainer';
import { CartContext } from './context/CartContext';
import './App.css';

const App = () => {
	const[cart, setCart] = useState([]);

	return (
		<>
			<div>
				<CartContext.Provider value={ {cart, setCart} }>
					<BrowserRouter>
						<Navbar />
						<Routes>
							<Route path={'/'} element={<Header />} />
							<Route path={'/productos'} element={<ItemListContainer />} />
							<Route path={'/productos/:category'} element={<ItemListContainer />} />
							<Route path={'/item/:id'} element={<ItemDetailContainer />} />
							<Route path={'/cart'} element={<Cart />} />
							<Route path={'/*'} element={<Error />} />
						</Routes>
						<Footer />
					</BrowserRouter>
				</CartContext.Provider>
			</div>
		</>
	)
}

export default App
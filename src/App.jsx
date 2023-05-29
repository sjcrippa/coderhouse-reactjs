import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Footer from './components/Footer';
import ItemListContainer from './components/containers/itemListContainer/ItemListContainer';
import Error from './components/Error';
import Header from './components/Header';
import Navbar from './components/containers/navbar/Navbar';
import ItemDetailContainer from './components/containers/itemDetail/ItemDetailContainer';
import './App.css';

const App = () => {
	return (
		<>
			<div>
				<BrowserRouter>
				<Navbar />
					<Routes>
						<Route path={'/'} element={<Header />} />
						<Route path={'/productos'} element={<ItemListContainer />} />
						<Route path={'/productos/:category'} element={<ItemListContainer />} />
						<Route path={'/item/:id'} element={<ItemDetailContainer />} />
						<Route path={'/*'} element={<Error />} />
					</Routes>
					<Footer />
				</BrowserRouter>
			</div>
		</>
	)
}

export default App
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Footer from './components/Footer';
import Navbar from './components/containers/navbar/Navbar';
import ItemListContainer from './components/containers/itemListContainer/ItemListContainer';
import Error from './components/Error';
import './App.css'
import Main from './components/Main';
import Header from './components/Header';

const App = () => {
	return (
		<>
			<div>
				<BrowserRouter>
					<Routes>
						<Route path={'/'} element={<Header />} />
						<Route path={'/productos'} element={<ItemListContainer />} />
						<Route path={'/productos/category:id'} element={<ItemListContainer />} />
						<Route path={'/footer'} element={<Footer />} />
						<Route path={'/*'} element={<Error />} />
					</Routes>
					<ItemListContainer />
					<Footer />
				</BrowserRouter>
			</div>
		</>
	)
}

export default App
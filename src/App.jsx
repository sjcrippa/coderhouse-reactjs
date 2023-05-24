import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Footer from './components/Footer';
import Navbar from './components/containers/navbar/Navbar';
import ItemListContainer from './components/containers/itemListContainer/ItemListContainer';
import Error from './components/Error';
import './App.css'

const App = () => {
	return (
		<>
			<div className='app'>
				<BrowserRouter>
					<Routes>
						<Route path={'/'} element={<Navbar />} />
						<Route path={'/productos'} element={<ItemListContainer />} />
						<Route path={'/productos/category:id'} element={<ItemListContainer />} />
						<Route path={'/footer'} element={<Footer />} />
						<Route path={'/*'} element={<Error />} />
					</Routes>
					<Footer />
				</BrowserRouter>
			</div>
		</>
	)
}

export default App
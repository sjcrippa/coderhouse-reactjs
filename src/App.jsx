import React from 'react';

import Main from './components/Main';
import Footer from './components/Footer';
import Navbar from './components/containers/navbar/Navbar';
import './App.css'

const App = () => {
	return (
		<>
			<div className='app'>
				<Navbar />
				<Main />
				<Footer />
			</div>
		</>
	)
}

export default App
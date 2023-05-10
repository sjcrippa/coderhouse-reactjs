import React from 'react';

import Navbar from './components/navbar/Navbar'
import Main from './components/Main';
import Footer from './components/Footer';
import Contact from './components/Contact';
import './App.css'

const App = () => {
	return (
		<>
			<Navbar />
			<Main />
			<Contact />
			<Footer />
		</>
	)
}

export default App
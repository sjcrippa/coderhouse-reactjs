import React from 'react';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Contact from './components/Contact';
import './App.css'

const App = () => {
	return (
		<div>
			<Header />
			<Main />
			<Contact />
			<Footer />
		</div>
	)
}

export default App
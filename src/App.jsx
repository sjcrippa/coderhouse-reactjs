import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { CartProvider } from './context/CartContext';
import Footer from './components/Footer';
import Error from './components/Error';
import Header from './components/Header';
import Navbar from './components/containers/navbar/Navbar';
import Cart from './components/Cart';
import ItemListContainer from './components/containers/itemListContainer/ItemListContainer';
import ItemDetailContainer from './components/containers/itemDetail/ItemDetailContainer';
import Checkout from './components/Checkout';
import './App.css';

const App = () => {

  return (
    <>
      <div>
        <CartProvider>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path={'/'} element={<Header />} />
              <Route path={'/home'} element={<Header />} />
              <Route path={'/productos'} element={<ItemListContainer />} />
              <Route path={'/productos/:category'} element={<ItemListContainer />} />
              <Route path={'/item/:id'} element={<ItemDetailContainer />} />
              <Route path={'/cart'} element={<Cart />} />
              <Route path={'/checkout'} element={<Checkout />} />
              <Route path={'/*'} element={<Error />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </CartProvider>
      </div>
    </>
  )
}

export default App
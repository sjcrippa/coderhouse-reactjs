import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { CartContext } from '../context/CartContext';

import trash from '../assets/trash.svg';
import trashAlt from '../assets/trashAlt.svg';

const Cart = () => {
  const { cart, totalAmount, handleClearCart, removeItem } = useContext(CartContext);

  const handleClear = () => {
    handleClearCart();
  };

  return (
    <>
      <div className='cart-detail h-screen py-16'>
        <div className='item-box mx-5 md:mx-10 lg:mx-24 mt-10 bg-white h-[80vh] opacity-90 overflow-y-scroll rounded-md p-1'>
          <h1 className='p-2 text-start text-xl uppercase text-slate-900 '>Order Detail</h1>
          {
            cart.map((item) => (
              <div className='bg-black text-white w-full' key={item.id}>
                <div className='flex justify-start items-center gap-5 border-b border-white'>
                  <img src={item.image} alt="img" width={100} />
                  <div className='flex-col items-center sm:flex sm:flex-row sm:w-full sm:justify-between'>
                    <h2>{item.name}</h2>
                    <p className='tracking-wider'>{item.quantity} x {item.price}</p>
                    <p className='tracking-wider'>Total: ${item.price * item.quantity}</p>
                    <button 
                      className='translate-x-36 -translate-y-10 sm:relative sm:translate-x-0 sm:translate-y-0'
                      onClick={() => removeItem(item.id)}>
                      <img className='w-8 h-8' src={trash} alt="trash icon" />
                    </button>
                  </div>
                  <br />
                </div>
              </div>
            ))
          }
          {
            cart.length > 0
              ? <div className='mt-2 text-2xl mx-5 md:mx-10 lg:mx-24'>
                <div className='flex gap-5 justify-end'>
                  <h2 className=''>Total ${totalAmount()} </h2>
                  <button onClick={handleClear}>
                    <img className='w-10 h-10' src={trashAlt} alt="alternative trash icon" />
                  </button>
                </div>
              </div>
              : <h2 className='p-2 m-2 w-2/3 sm:w-1/2 rounded-lg bg-red-600 text-white text-sm text-center mx-auto'>Oh! You haven't added any products.</h2>
          }
        </div>
        <div className='flex justify-end mt-10 mr-10'>
          <Link to={'/checkout'}>
            <button className='uppercase text-2xl bg-indigo-600 rounded text-white p-3'>Go to checkout</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Cart;
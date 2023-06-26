import React, { useContext, useState } from 'react';

import Counter from '../counter/Counter'
import { CartContext } from '../../../context/CartContext';
import BackToHome from '../buttons/BackToHome';
import SeeCart from '../buttons/SeeCart';

const ItemDetail = ({ item }) => {

  const [quantity, setQuantity] = useState(1);
  const [details, setDetails] = useState(false);

  const { handleAddToCart } = useContext(CartContext)

  //Logic for functional counter:
  const plusOne = () => {
    quantity < item.stock && setQuantity(quantity + 1)
  };
  const minusOne = () => {
    quantity > 1 && setQuantity(quantity - 1)
  };

  // Logic for btn detail:
  const handleDetails = () => {
    if (!details) {
      setDetails(true)
    } else {
      setDetails(false)
    };
  };

  return (
    <>
      <div className='py-16 mx-auto'>
        <BackToHome />
        <div className='block sm:flex justify-center'>
          <div className='card mx-auto lg:mx-16 mt-10 w-4/6 md:w-3/6 rounded-xl shadow-lg bg-white shadow-black hover:shadow-2xl hover:shadow-black duration-150'>
            <h3 className='py-1 -mb-2 ml-2 uppercase text-lg'>{item.name}</h3>
            <img className='p-1 rounded-t-xl' src={item.image} alt="prod-img" />
            <div className='p-2 mb-2 text-sm lg:text-base text-center font-serif font-semibold'>
              <section className='border-t-2 border-slate-900'></section>
              <button
                onClick={handleDetails}
                className='mt-2 text-sm uppercase font-sans text-slate-900'>{!details
                  ? <><p className='tracking-widest font-bold'>details</p></>
                  : <div className='transition-all ease-in duration-300 font-bold'>
                    <p className='mb-2 text-center'>For {item.category}</p>
                    <p className='text-start'>{item.description}</p>
                  </div>}
              </button>
            </div>
          </div>
          <div className='flex flex-col md:w-96'>
            <div className='font-sans mt-10 m-5 mx-16 md:mx-8 rounded-xl bg-white p-3 shadow-lg shadow-black text-slate-900 h-[22rem] md:h-1/2'>
              <h2 className='text-center text-xl font-bold'>ORDER IT  NOW!</h2>
              <div className='mt-1 text-start font-semibold mb-3 md:mb-10'>
                <p className='mt-2'>$ {item.price}</p>
                <p>VISA</p>
                <p>MASTERCARD</p>
                <p>HOME DELIVER</p>
              </div>
              <Counter
                quantity={quantity}
                plusOne={plusOne}
                minusOne={minusOne}
                handleAddToCart={() => { handleAddToCart(item, quantity) }}
              />
              <div className='flex justify-center mt-7 md:mt-32'>
              <SeeCart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
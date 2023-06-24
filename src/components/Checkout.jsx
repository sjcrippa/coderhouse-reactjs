import React, { useContext, useState } from 'react';

import { CartContext } from '../context/CartContext';

import { addDoc, getFirestore, collection } from 'firebase/firestore';

import '../App.css';

const Checkout = () => {
  const [orderId, setOrderId] = useState('');
  const [formData, setFormData] = useState({ name: null, email: null, phone: null })

  const { cart, totalAmount } = useContext(CartContext);

  // Logic for recopilation of data:
  const handleForm = (e) => {
    const inputName = e.target.name
    const inputValue = e.target.value
    setFormData({
      ...formData,
      [inputName]: inputValue
    })
  }

  // Logic to send the data into Firestore
  const generateOrder = (e) => {
    e.preventDefault();
    const { name, email, phone } = formData;

    // Simple validation:
    if (name.length === 0) {
      return false
    }
    if (email.length === 0) {
      return false
    }
    if (phone.length === 0) {
      return false
    }

    const buyer = { name: name, email: email, phone: phone };
    const save_date = new Date();
    const date = `${save_date.getDate()}-${save_date.getMonth() + 1}-${save_date.getFullYear()} ${save_date.getHours()}:${save_date.getMinutes()}`;
    const total = totalAmount();
    const order = { buyer: buyer, items: cart, date: date, total: total };
    console.log(order);

    const db = getFirestore();
    const OrdersCollection = collection(db, "orders");
    addDoc(OrdersCollection, order)
      .then(resp => {
        setOrderId(resp.id)
      })
      .catch(resp => {
        console.log('error');
      })
  }

  return (
    <>
      <div className='container mx-auto p-5 z-0'>
        <div className='w-full h-screen text-center z-0'>
          <div className='relative top-24 grid grid-cols-1 md:grid-cols-2 gap-5'>
            <div>

              <h1 className='text-2xl'>Checkout</h1>
              <form className='mt-5'>
                <div className='flex flex-col gap-3'>
                  <label className='text-start'>First and last name</label>
                  <input
                    name='name'
                    onChange={(e) => handleForm(e)}
                    className='z-0' type="text" placeholder='Name' />

                  <label className='text-start'>Email</label>
                  <input
                    name='email'
                    onChange={(e) => handleForm(e)}
                    type="email" placeholder='Email' />

                  <label className='text-start'>Phone number</label>
                  <input type="text" placeholder='Phone'
                    name='phone'
                    onChange={(e) => handleForm(e)}
                  />
                </div>
                <button
                  type="submit"
                  onClick={generateOrder}
                  className='mt-5 flex justify-start p-2 bg-indigo-600 text-white border rounded'>Generate order</button>
              </form>
            </div>
            <div className='border rounded'>
              <h2 className='text-center text-2xl'>Render de productos</h2>
              <div className='p-5 max-h-96 md:max-h-[32rem] overflow-auto'>
                {
                  cart.map((item) => (
                    <div className='bg-black text-white w-full rounded shadow-md shadow-black/50' key={item.id}>
                      <div className='flex items-center gap-24 border-b border-white'>
                        <div className='flex w-full justify-between items-center'>
                          <img src={item.image} alt="img" width={100} />
                          <h2>{item.name}</h2>
                          <p>{item.quantity} x {item.price}</p>
                        </div>
                        <p className='flex flex-shrink-0'>Total: ${item.price * item.quantity}</p>
                        <br />
                      </div>
                    </div>
                  ))
                }
                <h2 className='text-end p-5'>total ${totalAmount()}</h2>
              </div>
            </div>
          </div>
        </div>
        <div className='mx-auto text-center'>
          {orderId
            ? <>
              <div className='bg-indigo-600 text-white rounded p-2'>
                <h2 className='text-2xl font-semibold uppercase'>
                  Thanks for buying!
                </h2>
                <p className='uppercase italic'>Your order id is: <br /> {orderId}</p>
              </div>
            </>
            : ''}
        </div>
      </div>
    </>
  )
}

export default Checkout;
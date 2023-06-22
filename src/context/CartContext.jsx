import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const cartInit = JSON.parse(localStorage.getItem('cart')) || [];

export const CartProvider = ({ children }) => {

    /* Logic for controlling cart and counter behavior: */
    const [cart, setCart] = useState(cartInit);
    const handleAddToCart = (item, quantity) => {
        const itemAdded = { ...item, quantity }
        const newCart = [...cart]; /* here we are generating a new cart to avoid conflict in the origin one. */
        const prodInCart = newCart.find((producto) => producto.id === itemAdded.id);

        if (prodInCart) {
            prodInCart.quantity += quantity;
        } else {
            newCart.push(itemAdded)
        }
        setCart(newCart);
    };

    /* Logic for adding to cartwidget the amount obteined: */
    const quantityInCart = () => {
        return cart.reduce((acc, prod) => acc + prod.quantity, 0);
    }

    /* Logic for showing the total amount on the cart: */
    const totalAmount = () => {
        return cart.reduce((acc, prod) => acc + prod.price * prod.quantity, 0);
    }

    /* Logic for removing a single item. */
    const removeItem = (id) => {
        const items = cart.filter(item => item.id !== id)
        setCart([...items])
    }

    /* Logic for clearing the cart:  */
    const handleClearCart = () => {
        setCart([]);
    };

    /* Logic for cart storage: */
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    },[cart])

    return (
        <CartContext.Provider value={{
            cart,
            handleAddToCart,
            quantityInCart,
            totalAmount,
            removeItem,
            handleClearCart
        }}>
            {children}
        </CartContext.Provider>
    )
}
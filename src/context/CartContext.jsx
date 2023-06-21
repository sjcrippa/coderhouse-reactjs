import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const cartInit = JSON.parse(localStorage.getItem('cart')) || [];

export const CartProvider = ({ children }) => {

    /* LOGICA PARA CONTROLAR EL COMPORTAMIENTO DEL CARRITO Y SU CONTADOR. */
    const [cart, setCart] = useState(cartInit);
    const handleAddToCart = (item, quantity) => {
        const itemAdded = { ...item, quantity }
        const newCart = [...cart]; /* aca se genero una copia del carrito original para poder modificar su estado evitando conflictos. */
        const prodInCart = newCart.find((producto) => producto.id === itemAdded.id);

        if (prodInCart) {
            prodInCart.quantity += quantity;
        } else {
            newCart.push(itemAdded)
        }
        setCart(newCart);
    };

    /* LOGICA PARA AGREGAR CANTIDAD OBTENIDA AL CARTWIDGET */
    const quantityInCart = () => {
        return cart.reduce((acc, prod) => acc + prod.quantity, 0);
    }

    /* LOGICA PARA MOSTRAR TOTAL EN EL CARRITO */
    const totalAmount = () => {
        return cart.reduce((acc, prod) => acc + prod.price * prod.quantity, 0);
    }

    /* LOGICA PARA VACIAR CARRITO */
    const handleClearCart = () => {
        setCart([]);
    };

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    },[cart])

    return (
        <CartContext.Provider value={{
            cart,
            handleAddToCart,
            quantityInCart,
            totalAmount,
            handleClearCart
        }}>
            {children}
        </CartContext.Provider>
    )
}
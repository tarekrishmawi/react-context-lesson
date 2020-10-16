import React, { createContext, useEffect, useState } from "react";
import { addItemToCart, filterItemFromCart, removeItemFromCart, getCarItemsCount } from "./cart.utils";

export const CartContext = createContext({
    hidden: true,
    toggleHidden: () => { },  //anon function that does nothing 
    cartItems: [],
    addItem: () => { },
    removeItem: () => { },
    clearItemFromCart: () => { },
    cartItemsCount: 0
});

const CartProvider = ({ children }) => {

    const [hidden, setHidden] = useState(true);
    const [cartItems, setCartItems] = useState([]);
    const [cartItemsCount, setCartItemsCount] = useState(0);

    const addItem = item => setCartItems(addItemToCart(cartItems, item));
    const removeItem = item => setCartItems(removeItemFromCart(cartItems, item));
    const clearItemFromCart = item => setCartItems(filterItemFromCart(cartItems, item));

    const toggleHidden = () => setHidden(!hidden);

    useEffect(() => {
        setCartItemsCount(getCarItemsCount(cartItems))
    }, [cartItems]);
    
    return <CartContext.Provider
        value={{
            hidden,
            toggleHidden,
            cartItems,
            addItem,
            removeItem,
            cartItemsCount,
            clearItemFromCart
        }}
    >
        {children}</CartContext.Provider>;

};

export default CartProvider;


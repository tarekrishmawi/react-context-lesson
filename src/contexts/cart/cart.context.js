import { createContext } from "react";

const CartContext = createContext({
    hidden: true,
    toggleHidden: () => { }  //anon function that does nothing 
});

export default CartContext;
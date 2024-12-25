import {createContext, useState} from "react";
import {productData} from "../../toppingData"

export const CartContext = createContext(null);

const getDefaultCart = () => {
 let cart = {}
 for (let i=1; i < productData.length; i++) {
    cart[i] = 0;
 }
 return cart;
};

export const CartContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());

    const addToCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}));
    };

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}));
    };

    const contextValue = { cartItems, addToCart, removeFromCart };

    return <CartContext.Provider value={contextValue}>
        {props.children}
        </CartContext.Provider>
}
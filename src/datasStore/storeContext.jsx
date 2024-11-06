// context/CartContext.js

import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export default function CartProvider({ children }){

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const setEcomProducts = (items) =>{
    setProducts(items)
  }
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    alert("Product Added Successfull")
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((product) => product.id !== productId));
  };

  return (
    <CartContext.Provider value={{products, setEcomProducts, cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const CartData = ()=>{
    return useContext(CartContext)
}
import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const StoreContext = createContext();

export const StoreContextProvider = ({ children }) => {
  const [foodList, setFoodList] = useState([]); 
  const [cartItems, setCartItems] = useState({});  

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await axios.get('http://localhost:5000/menu'); 
        if (response.data.status) {
          setFoodList(response.data.data); 
        }
      } catch (error) {
        console.error("Error fetching menu data:", error);
      }
    };

    fetchMenu();
  }, []);

  const addToCart = (id) => {
    setCartItems((prev) => {
      const newCart = { ...prev };
      if (newCart[id]) {
        newCart[id] += 1; 
      } else {
        newCart[id] = 1;
      }
      return newCart;
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => {
      const newCart = { ...prev };
      if (newCart[id] > 1) {
        newCart[id] -= 1; 
      } else {
        delete newCart[id]; 
      }
      return newCart;
    });
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        const itemInfo = foodList.find((product) => product.id_menu === parseInt(item));
        if (itemInfo) {
          totalAmount += itemInfo.harga * cartItems[item]; 
        }
      }
    }
    return totalAmount;
  };

  const clearCart = () => {
    setCartItems({});
  };

  const getTotalItemsInCart = () => {
    let totalItems = 0;
    for (const item in cartItems) {
      totalItems += cartItems[item]; 
    }
    return totalItems;
  };

  return (
    <StoreContext.Provider value={{ foodList, cartItems, addToCart, removeFromCart, clearCart, getTotalCartAmount, getTotalItemsInCart }}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;

import { createContext, useState, useEffect } from 'react';
import SHOP_DATA from '../shopdata.json';

export const ShopContext = createContext({
  shopData: [],
  cartItem: [],
  setCartItem: () => {},
});

export const ShopProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
 

  useEffect(() => setProducts(SHOP_DATA), []);

  const value = { products, setProducts };
  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

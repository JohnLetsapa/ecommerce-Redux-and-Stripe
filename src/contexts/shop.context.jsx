import { createContext, useState, useEffect } from 'react';
import SHOP_DATA from '../shopdata.json';

export const ShopContext = createContext({
  shopData: [],
});

export const ShopProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => setProducts(SHOP_DATA), []);

  // console.log('useContext products:', products);

  const value = { products, setProducts };
  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

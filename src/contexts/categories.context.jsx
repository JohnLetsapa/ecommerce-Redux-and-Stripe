import { createContext, useState, useEffect } from 'react';
import {
  addCollectionAndDocuments,
  getCategoriesAndDocuments,
} from '../utils/firebase/firebase.utils';

// import SHOP_DATA from '../shop-data'; // See XXI below.

export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  // when using async with useEffect, rather define a callback function inside useEffect
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();

      setCategoriesMap(categoryMap);
      
    };
    getCategoriesMap();
  }, []);
  // XXI. we used this to upload shop-data to firestore db, however, we dont need it to run every time because it will attempt to set new values which isn't necessary...
  // useEffect(() => {
  //   addCollectionAndDocuments('categories', SHOP_DATA);
  // }, []);

  const value = { categoriesMap };
  console.log('Categories.Context :', categoriesMap);
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};

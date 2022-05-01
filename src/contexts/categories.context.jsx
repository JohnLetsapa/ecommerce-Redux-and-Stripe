// import { createContext, useReducer, useEffect } from 'react';
// import {
//   addCollectionAndDocuments,
//   getCategoriesAndDocuments,
// } from '../utils/firebase/firebase.utils';

// // import SHOP_DATA from '../shop-data'; // See XXI below.

// export const CategoriesContext = createContext({
//   categoriesMap: {},
// });

// const SET_CATEGORIES_TYPES = {
//   SET_CATEGORIES_MAP: 'SET_CATEGORIES_MAP',
// };

// const categoriesReducer = (state, action) => {
//   const { type, payload } = action;

//   switch (type) {
//     case SET_CATEGORIES_TYPES.SET_CATEGORIES_MAP:
//       return {
//         ...state,
//         categoriesMap: payload,
//       };
//     default:
//       return `Unhandled type ${type}`;
//   }
// };

// const INITIAL_STATE = {
//   categoriesMap: {},
// };

// export const CategoriesProvider = ({ children }) => {
//   const [{ categoriesMap }, dispatch] = useReducer(
//     categoriesReducer,
//     INITIAL_STATE
//   );

//   const setCategoriesMap = (categoryMap) => {
//     dispatch({
//       type: SET_CATEGORIES_TYPES.SET_CATEGORIES_MAP,
//       payload: categoryMap,
//     });
//   };

//   // when using async with useEffect, rather define a callback function inside useEffect
//   useEffect(() => {
//     const getCategoriesMap = async () => {
//       const categoryMap = await getCategoriesAndDocuments();
//       console.log('useEffect:', categoryMap);
//       setCategoriesMap(categoryMap);
//     };
//     getCategoriesMap();
//   }, []);
//   // XXI. we used this to upload shop-data to firestore db, however, we dont need it to run every time because it will attempt to set new values which isn't necessary...
//   // useEffect(() => {
//   //   addCollectionAndDocuments('categories', SHOP_DATA);
//   // }, []);

//   const value = { categoriesMap };
//   console.log('Categories.Context :', categoriesMap);
//   return (
//     <CategoriesContext.Provider value={value}>
//       {children}
//     </CategoriesContext.Provider>
//   );
// };

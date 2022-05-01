import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCategoriesMap } from '../../store/categories/categories.action';

import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';

import { Route, Routes } from 'react-router-dom';
import './shop.styles.scss';
import CategoriesPreview from '../../routes/categories-preview/categories-preview.component';
import Category from '../../routes/category/category.component';

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      // console.log('useEffect:', categoryMap);
      dispatch(setCategoriesMap(categoryMap));
    };
    getCategoriesMap();
  }, []);

  return (
    <div>
      <Routes>
        {/* index short for index = true. it will render at path = '/'. */}
        <Route index element={<CategoriesPreview />} />
        <Route path=":category" element={<Category />} />
      </Routes>
    </div>
  );
};

export default Shop;

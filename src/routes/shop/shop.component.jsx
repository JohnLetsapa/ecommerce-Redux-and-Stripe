import { Route, Routes } from 'react-router-dom';
import './shop.styles.scss';
import CategoriesPreview from '../../routes/categories-preview/categories-preview.component';
import Category from '../../routes/category/category.component';

const Shop = () => {
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

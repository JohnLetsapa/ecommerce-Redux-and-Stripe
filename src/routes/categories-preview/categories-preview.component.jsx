import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { selectCategories } from '../../store/categories/categories.selectors';

import CategoryPreview from '../../components/category-preview/category-preview.component';

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategories);

  return (
    <Fragment>
      {
        // Object.keys returns an array of keys...
        Object.keys(categoriesMap).map((title, index) => {
          const products = categoriesMap[title];
          return (
            <CategoryPreview key={title} title={title} products={products} />
          );
        })
      }
    </Fragment>
  );
};

export default CategoriesPreview;

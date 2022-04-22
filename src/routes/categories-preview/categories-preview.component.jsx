import { useContext, Fragment } from 'react';
import { CategoriesContext } from '../../contexts/categories.context';
// import './categories-preview.styles.scss';
import CategoryPreview from '../../components/category-preview/category-preview.component';

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  console.log('CategoriesPreview:', categoriesMap);

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

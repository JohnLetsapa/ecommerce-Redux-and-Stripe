import { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // allows render of dynamic path from the url...
import { CategoriesContext } from '../../contexts/categories.context';
import ProductCard from '../../components/product-card/product-card.component';
import './category.styles.scss';
import { Fragment } from 'react';

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);

  const [products, setProducts] = useState(categoriesMap[category]);
//   console.log('Category Page:', categoriesMap[category]);
//   console.log('Category Page -> category:', category);
  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <h2 className="category-title">{category.toUpperCase()}</h2>
      <div className="category-container">
        {
          // we need to put save guards on async fetched data to ensure that the render doesn't return errors because of no-data
          products && // this solves the issue of mapping over an empty array. it ensures that map only runs when products evaluates to truthy.
            products?.map((product) => {
              return <ProductCard key={product.id} product={product} />;
            })
        }
      </div>
    </Fragment>
  );
};

export default Category;

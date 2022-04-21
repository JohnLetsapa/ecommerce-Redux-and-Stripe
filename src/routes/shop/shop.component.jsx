import { useContext } from 'react';
import { ShopContext } from '../../contexts/shop.context';
import './shop.styles.scss';
import ProductCard from '../../components/product-card/product-card.component';

const Shop = () => {
  const { products } = useContext(ShopContext);
  // console.log(products);

  return (
    <div className='products-container'>
      {products?.map((product, id) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
};

export default Shop;

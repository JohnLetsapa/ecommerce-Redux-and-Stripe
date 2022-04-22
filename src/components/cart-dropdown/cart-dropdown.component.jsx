import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../contexts/cart.context';
import CartItem from '../cart-item/cart-item.component';
import Checkout from '../../routes/checkout/checkout.component';
import Button from '../button/button.component';
import './cart-dropdown.styles.scss';

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  const goToCheckOut = () => {
    navigate('/checkout');
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems?.map((item, id) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <div>
        <Button onClick={goToCheckOut}> CHECKOUT </Button>
      </div>
    </div>
  );
};

export default CartDropdown;

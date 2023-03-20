import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/redux/reducers';
import { populateCart, toggleCartModal } from '../../../redux/reducers/cart';

const CartIcon: React.FC = () => {
  // Get cart items from the state
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items)

  // Function to handle cart icon click
  const handleCartIconClick = () => {
    dispatch(toggleCartModal());
  };

  useEffect(() => {
    dispatch(populateCart());
  }, []);

  return (
    <div className="fixed bottom-4 right-4">
      <div
        onClick={handleCartIconClick}
        className="bg-gray-200 text-gray-700 p-4 rounded-full cursor-pointer shadow-lg hover:bg-gray-300 transition-colors duration-300"
      >
        <FontAwesomeIcon icon={faShoppingCart} />
        { cartItems.length > 0 && (
        <span style={{ display: cartItems.length > 0 ? 'block' : 'none' }}
          className="bg-red-500 text-white text-xs font-semibold rounded-full py-1 px-2 absolute -top-2 -right-2"
        >
          {cartItems.length}
        </span>
        )}
      </div>
    </div>
  );
};

export default CartIcon

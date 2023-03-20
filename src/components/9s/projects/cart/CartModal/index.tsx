import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleCartModal, removeItemFromCart } from '../../../../redux/reducers/cart';
import { RootState } from 'src/redux/reducers';

const CartModal: React.FC = () => {
  // Get cart items and showModal from the state
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const showModal = useSelector((state: RootState) => state.cart.showModal);
  const dispatch = useDispatch();

  const handleModalClick = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    // Prevent the event from propagating to the overlay div
    event.stopPropagation();
  }, []);

  if (!showModal) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50"
      onClick={() => dispatch(toggleCartModal())}
    >
      <div className="bg-white rounded-md p-4" onClick={handleModalClick}>
        <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
        <ul className="mb-4">
          {cartItems.map((item, index) => (
            <li key={index} className="text-lg flex justify-between">
              {`${item.name} - $${item.price}`}
              <button
                className="bg-red-600 hover:bg-red-700 text-white rounded-md py-2 px-4"
                onClick={() => dispatch(removeItemFromCart(item.id))}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
        <button
          className="bg-gray-800 text-white rounded-md py-2 px-4 hover:bg-gray-700"
          onClick={() => dispatch(toggleCartModal())}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default CartModal;

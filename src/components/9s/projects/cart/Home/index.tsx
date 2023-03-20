import React from 'react';
import { useDispatch } from 'react-redux';
import { CartItem, addToCartRequest } from '../../../../redux/reducers/cart';

// Define the product interface


const Home: React.FC = () => {
  const dispatch = useDispatch();

  // Function to handle adding a product to the cart
  const handleAddToCart = (product: CartItem) => {
    dispatch(addToCartRequest(product));
  };
  

  return (
    <div>
      {/* Render your products list */}
      <button onClick={() => handleAddToCart({ id: "iaia", name: 'Sample Product', price: 9.99, quantity: 1})}>
        Add to Cart
      </button>
    </div>
  );
};

export default Home;

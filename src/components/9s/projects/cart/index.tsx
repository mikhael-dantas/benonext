import CartModal from '@myComponents/9s/cart/CartModal';
import Header from '@myComponents/9s/cart/Header';
import Home from '@myComponents/9s/cart/Home';
import React from 'react';

const Page: React.FC = ({}) => {

  return (
    <div>
      <Header/>
      <Home />
      <CartModal />
    </div>
  );
};

export default Page;
import React from 'react';
import Myfooter from './Myfooter';
import MyHeader from './MyHeader';
import CartIcon from '@myComponents/cart/CartIcon';
import CartModal from '@myComponents/cart/CartModal';

// import { Container } from './styles';

function MyLayout ({children}) {
    return (
        <div className="
        flex flex-col
        min-h-[110vh]
        bg-[#f7fafc]
        justify-between
        ">
            <MyHeader/>
            {children}
            <Myfooter/>
            <CartIcon/>
            <CartModal/>
        </div>
    )
}

export default MyLayout;
import ImageUpload from '@myComponents/management/images/imageUpload';
import React from 'react';

// import { Container } from './styles';

const Manage: React.FC = () => {
    return (
        <>
            <ImageUpload/>
            {/* make a line dividing components usiing tailwindcss */}
            <hr className='border-2 border-gray-300 my-4'/>
            <div className='square w-20 h-20 bg-gray-300'></div>
        </>
    )
}

export default Manage;
import React from 'react';
import SideMenu9s from './SideMenu';
import MainContent9s from './MainContent';


const Home9s: React.FC = () => {
    return (
        <div className="9s-container flex w-[100%]">
            <SideMenu9s />
            <MainContent9s />
        </div>
    );
};

export default Home9s;

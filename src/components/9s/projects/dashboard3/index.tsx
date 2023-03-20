// pages/index.tsx

import React from 'react';
import SideMenu from './SideMenu';
import MainContent from './MainContent';

const Home: React.FC = () => {
  return (
    <div className="flex">
      <SideMenu />
      <MainContent />
    </div>
  );
};

export default Home;

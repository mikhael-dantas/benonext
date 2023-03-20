// components/SideMenu.tsx

import React, { useState } from 'react';
import { Tab, mockedTabs } from '../../../../lib/minidashboard/mockedData'
import { useDispatch } from 'react-redux';
import { setCurrentTab } from 'src/redux/reducers/currentTab';

const SideMenu: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useDispatch();

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleTabClick = (tab: Tab) => {
    dispatch(setCurrentTab(tab));
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full p-4 bg-white dark:bg-gray-800">
        <button
          className="p-1 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          onClick={handleToggleMenu}
        >
          <svg className="h-6 w-6 text-gray-700 dark:text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </header>
      <div className={`fixed top-0 left-0 h-screen w-64 bg-white dark:bg-gray-800 shadow-lg transform transition-transform duration-200 ease-in-out ${isMenuOpen ? 'translate-x-0 z-50' : '-translate-x-full z-0'}`} style={{ left: isMenuOpen ? '0' : '-64px' }}>
        <div className="flex items-center justify-between p-4 border-b">
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">My App</h1>
          <button
            className="block p-1 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            onClick={handleToggleMenu}
          >
            <svg className="h-6 w-6 text-gray-700 dark:text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="overflow-y-auto">
          <nav className="mt-5 px-2 space-y-1">
            {mockedTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {handleTabClick(tab); handleToggleMenu()}}
                className="
                    group flex items-center 
                    px-2 py-2 
                    text-lg font-medium 
                    rounded-md text-gray-600 dark:text-gray-200 hover:text-gray-900 
                    dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 
                    focus:outline-none focus:ring focus:border-blue-300
                    w-full
                "
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};

export default SideMenu;

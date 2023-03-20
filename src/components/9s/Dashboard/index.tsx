// components/Dashboard.tsx

import React from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentTab } from 'src/redux/reducers/currentTab';
import { Tab9s, Tabs9s } from '../tabs9s';

const colors = [
  ' bg-gray-100 dark:bg-gray-600',
  ' bg-green-100 dark:bg-green-600',
  ' bg-blue-100 dark:bg-blue-600',
  ' bg-yellow-100 dark:bg-yellow-600',
  ' bg-red-100 dark:bg-red-600',
]
const Dashboard9s: React.FC = () => {
  const dispatch = useDispatch();

  const handleButtonClick = (tab: Tab9s) => {
    dispatch(setCurrentTab(tab));
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4 w-[100%]">
      {Tabs9s.map((button, i) => (
        <button
          key={button.id}
          onClick={() => handleButtonClick(button)}
          className={
            `relative w-full h-32 sm:h-48 
            
            rounded-md shadow-md hover:shadow-xl transition-shadow duration-200 ease-in-out focus:outline-none focus:ring focus:border-blue-300
            ` + colors[i]
          }>
          <span className="absolute inset-0 flex items-center justify-center text-lg font-semibold text-gray-900 dark:text-white">
            {button.label}
          </span>
        </button>
      ))}
    </div>
  );
};

export default Dashboard9s;

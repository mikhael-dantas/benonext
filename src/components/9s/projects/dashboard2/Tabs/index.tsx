import React from 'react';

export const Tabs: React.FC = () => {
  return (
    <ul className="flex mb-4">
      <li className="mr-6">
        <a className="text-blue-500 hover:text-blue-800" href="#">
          Clients
        </a>
      </li>
      <li className="mr-6">
        <a className="text-blue-500 hover:text-blue-800" href="#">
          Payments
        </a>
      </li>
      {/* Add more tabs as needed */}
    </ul>
  );
};

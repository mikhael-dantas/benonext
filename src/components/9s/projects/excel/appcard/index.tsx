import React from 'react';
import { App } from 'src/lib/excel/mockedObjects';

interface AppCardProps {
  app: App;
}

const AppCard: React.FC<AppCardProps> = ({ app }) => {
  return (
    <div className="border border-gray-200 rounded p-4">
      <div className="font-semibold text-xl mb-2">{app.app_name}</div>
      <div className="text-sm text-gray-600">App ID: {app.app_id}</div>
      <div className="text-sm text-gray-600">Client ID: {app.client_id}</div>
      <div className="text-sm text-gray-600">Server: {app.server}</div>
      <div className="text-sm text-gray-600">Screens: {app.screens}</div>
      <div className="text-sm text-gray-600">Referrals: {app.referrals}</div>
      <div className="mt-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded shadow"
          onClick={() => {}}
        >
          Edit
        </button>
      </div>
    </div>
  );
};

export default AppCard;

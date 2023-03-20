import React from 'react';
import { App } from 'src/lib/excel/mockedObjects';
import AppCard from '../appcard';

interface AppListProps {
  apps: App[];
}

const AppList: React.FC<AppListProps> = ({ apps }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold mb-4">Apps</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {apps.map((app) => (
          <AppCard key={app.app_id} app={app} />
        ))}
      </div>
    </div>
  );
};

export default AppList;

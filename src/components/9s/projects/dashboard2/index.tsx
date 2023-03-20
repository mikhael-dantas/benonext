import React from 'react';
import { Tabs } from './Tabs/index';
import { ClientModal } from './ClientModal/index';
import { Table } from './Table/index';
import { RegistryInsertPage } from './RegistryInsertPage/index';

export const Dashboard: React.FC = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-semibold mb-4">ERP Dashboard</h1>
      <Tabs />
      <ClientModal />
      <Table />
      <RegistryInsertPage />
    </div>
  );
};

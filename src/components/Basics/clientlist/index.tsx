import React from 'react';
import { Client } from 'src/lib/data-structure';
import ClientCard from '../clientcard';

interface ClientListProps {
  clients: Client[];
}

const ClientList: React.FC<ClientListProps> = ({ clients }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold mb-4">Clients</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {clients.map((client) => (
          <ClientCard key={client.client_id} client={client} />
        ))}
      </div>
    </div>
  );
};

export default ClientList;

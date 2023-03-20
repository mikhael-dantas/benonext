import React from 'react';
import { Client } from 'src/lib/excel/mockedObjects';

interface ClientCardProps {
  client: Client;
}

const ClientCard: React.FC<ClientCardProps> = ({ client }) => {
  const handleEdit = () => {
    console.log('Edit client', client.client_id);
  };

  return (
    <div className="border border-gray-200 rounded-lg p-4">
      <h3 className="text-xl font-semibold mb-2">{client.name}</h3>
      <p>Contact: {client.contact_whats}</p>
      <p>Email: {client.email}</p>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
        onClick={handleEdit}
      >
        Edit
      </button>
    </div>
  );
};

export default ClientCard;

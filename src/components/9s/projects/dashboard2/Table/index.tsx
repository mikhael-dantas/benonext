import React from 'react';

interface Client {
  id: number;
  name: string;
  email: string;
}

const clients: Client[] = [
  { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
  { id: 2, name: 'Jane Doe', email: 'jane.doe@example.com' },
  // Add more mocked clients as needed
];

export const Table: React.FC = () => {
  return (
    <table className="table-auto w-full mb-8">
      <thead>
        <tr>
          <th className="px-4 py-2 text-left">ID</th>
          <th className="px-4 py-2 text-left">Name</th>
          <th className="px-4 py-2 text-left">Email</th>
        </tr>
      </thead>
      <tbody>
        {clients.map((client) => (
          <tr key={client.id}>
            <td className="border px-4 py-2">{client.id}</td>
            <td className="border px-4 py-2">{client.name}</td>
            <td className="border px-4 py-2">{client.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
    );
};
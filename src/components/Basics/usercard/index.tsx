import React from 'react';
import { User } from 'src/lib/data-structure';

interface UserCardProps {
  user: User;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <div className="border border-gray-200 rounded p-4">
      <div className="font-semibold text-xl mb-2">{user.username}</div>
      <div className="text-sm text-gray-600">User ID: {user.user_id}</div>
      <div className="text-sm text-gray-600">Client ID: {user.client_id}</div>
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

export default UserCard;

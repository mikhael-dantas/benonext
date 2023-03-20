import React from 'react';
import { User } from 'src/lib/excel/mockedObjects';
import UserCard from '../usercard';

interface UserListProps {
  users: User[];
}

const UserList: React.FC<UserListProps> = ({ users }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold mb-4">Users</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {users.map((user) => (
          <UserCard key={user.user_id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default UserList;

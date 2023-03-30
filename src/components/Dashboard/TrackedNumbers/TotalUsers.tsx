import React, { useState, useEffect } from "react";

const TotalUsers = () => {
  const [totalUsers, setTotalUsers] = useState(0);

  useEffect(() => {
    // Fetch the real data and update the state
    const mockTotalUsers = 120;
    setTotalUsers(mockTotalUsers);
  }, []);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-purple-700 mb-4">Total Users</h2>
      <p className="text-4xl font-bold text-purple-900">{totalUsers}</p>
    </div>
  );
};

export default TotalUsers;


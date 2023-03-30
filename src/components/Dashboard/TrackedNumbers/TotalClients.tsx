import React, { useState, useEffect } from "react";

const TotalClients = () => {
  const [totalClients, setTotalClients] = useState(0);

  useEffect(() => {
    // Fetch the real data and update the state
    const mockTotalClients = 350;
    setTotalClients(mockTotalClients);
  }, []);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-purple-700 mb-4">Total Clients</h2>
      <p className="text-4xl font-bold text-purple-900">{totalClients}</p>
    </div>
  );
};

export default TotalClients;

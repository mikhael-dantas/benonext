import React, { useState, useEffect } from "react";

const TotalApps = () => {
  const [totalApps, setTotalApps] = useState(0);

  useEffect(() => {
    // Fetch the real data and update the state
    const mockTotalApps = 245;
    setTotalApps(mockTotalApps);
  }, []);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-purple-700 mb-4">Total Applications</h2>
      <p className="text-4xl font-bold text-purple-900">{totalApps}</p>
    </div>
  );
};

export default TotalApps;

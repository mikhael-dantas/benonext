import React, { useState, useEffect } from "react";

const TotalDevices = () => {
  const [totalDevices, setTotalDevices] = useState(0);

  useEffect(() => {
    // Fetch the real data and update the state
    const mockTotalDevices = 980;
    setTotalDevices(mockTotalDevices);
  }, []);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-purple-700 mb-4">Total Devices</h2>
      <p className="text-4xl font-bold text-purple-900">{totalDevices}</p>
    </div>
  );
};

export default TotalDevices;

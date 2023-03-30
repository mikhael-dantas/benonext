import React, { useState, useEffect } from "react";

const TotalIncome = () => {
  const [totalIncome, setTotalIncome] = useState(0);

  useEffect(() => {
    // Fetch the real data and update the state
    const mockTotalIncome = 38500;
    setTotalIncome(mockTotalIncome);
  }, []);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-purple-700 mb-4">Total Income</h2>
      <p className="text-4xl font-bold text-purple-900">${totalIncome.toLocaleString()}</p>
    </div>
  );
};

export default TotalIncome;

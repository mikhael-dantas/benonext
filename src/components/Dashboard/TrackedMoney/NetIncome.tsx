import React, { useState, useEffect } from "react";

const NetIncome = () => {
  const [netIncome, setNetIncome] = useState(0);

  useEffect(() => {
    // Fetch the real data and update the state
    const mockNetIncome = 23250;
    setNetIncome(mockNetIncome);
  }, []);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-purple-700 mb-4">Net Income</h2>
      <p className="text-4xl font-bold text-purple-900">${netIncome.toLocaleString()}</p>
    </div>
  );
};

export default NetIncome;

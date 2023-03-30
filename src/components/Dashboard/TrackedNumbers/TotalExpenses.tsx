import React, { useState, useEffect } from "react";

const TotalExpenses = () => {
  const [totalExpenses, setTotalExpenses] = useState(0);

  useEffect(() => {
    // Fetch the real data and update the state
    const mockTotalExpenses = 295;
    setTotalExpenses(mockTotalExpenses);
  }, []);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-purple-700 mb-4">Total Expenses</h2>
      <p className="text-4xl font-bold text-purple-900">{totalExpenses}</p>
    </div>
  );
};

export default TotalExpenses;

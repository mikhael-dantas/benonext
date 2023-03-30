import React, { useState, useEffect } from "react";

const TotalExpenseAmount = () => {
  const [totalExpenseAmount, setTotalExpenseAmount] = useState(0);

  useEffect(() => {
    // Fetch the real data and update the state
    const mockTotalExpenseAmount = 15250;
    setTotalExpenseAmount(mockTotalExpenseAmount);
  }, []);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-purple-700 mb-4">Total Expenses Amount</h2>
      <p className="text-4xl font-bold text-purple-900">${totalExpenseAmount.toLocaleString()}</p>
    </div>
  );
};

export default TotalExpenseAmount;

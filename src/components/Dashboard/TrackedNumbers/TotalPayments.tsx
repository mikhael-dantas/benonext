import React, { useState, useEffect } from "react";

const TotalPayments = () => {
  const [totalPayments, setTotalPayments] = useState(0);

  useEffect(() => {
    // Fetch the real data and update the state
    const mockTotalPayments = 520;
    setTotalPayments(mockTotalPayments);
  }, []);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-purple-700 mb-4">Total Payments</h2>
      <p className="text-4xl font-bold text-purple-900">{totalPayments}</p>
    </div>
  );
};

export default TotalPayments;

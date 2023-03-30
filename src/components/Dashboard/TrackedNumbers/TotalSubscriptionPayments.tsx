import React, { useState, useEffect } from "react";

const TotalSubscriptionPayments = () => {
  const [totalSubscriptionPayments, setTotalSubscriptionPayments] = useState(0);

  useEffect(() => {
    // Fetch the real data and update the state
    const mockTotalSubscriptionPayments = 310;
    setTotalSubscriptionPayments(mockTotalSubscriptionPayments);
  }, []);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-purple-700 mb-4">Total Subscription Payments</h2>
      <p className="text-4xl font-bold text-purple-900">{totalSubscriptionPayments}</p>
    </div>
  );
};

export default TotalSubscriptionPayments;

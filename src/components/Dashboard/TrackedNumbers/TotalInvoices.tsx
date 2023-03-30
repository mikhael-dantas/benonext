import React, { useState, useEffect } from "react";

const TotalInvoices = () => {
  const [totalInvoices, setTotalInvoices] = useState(0);

  useEffect(() => {
    // Fetch the real data and update the state
    const mockTotalInvoices = 475;
    setTotalInvoices(mockTotalInvoices);
  }, []);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-purple-700 mb-4">Total Invoices</h2>
      <p className="text-4xl font-bold text-purple-900">{totalInvoices}</p>
    </div>
  );
};

export default TotalInvoices;

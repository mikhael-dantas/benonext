import React from "react";
import TotalIncome from "./TotalIncome";
import TotalExpenseAmount from "./TotalExpenses";
import NetIncome from "./NetIncome";

const FinancialDashboard = () => {
  return (
    <div className="container mx-auto px-4 mt-8 col-span-2">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="col-span-1">
          <TotalIncome />
        </div>
        <div className="col-span-1">
          <TotalExpenseAmount />
        </div>
        <div className="col-span-1">
          <NetIncome />
        </div>
      </div>
    </div>
  );
};

export default FinancialDashboard;

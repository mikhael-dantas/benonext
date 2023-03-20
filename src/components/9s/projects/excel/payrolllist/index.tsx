import React from 'react';
import { Payroll } from 'src/lib/excel/mockedObjects';
import PayrollCard from '../payrollcard';

interface PayrollListProps {
  payrollRecords: Payroll[];
}

const PayrollList: React.FC<PayrollListProps> = ({ payrollRecords }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold mb-4">Payroll Records</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {payrollRecords.map((payroll) => (
          <PayrollCard key={payroll.payroll_id} payroll={payroll} onEdit={() => {}}/>
        ))}
      </div>
    </div>
  );
};

export default PayrollList;

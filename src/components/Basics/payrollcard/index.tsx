import React from 'react';
import { Payroll, mockedPayrolls } from 'src/lib/data-structure';

interface PayrollCardProps {
  payroll: Payroll;
  onEdit: (payroll: Payroll) => void;
}

const PayrollCard: React.FC<PayrollCardProps> = ({ payroll, onEdit }) => {
    payroll = mockedPayrolls[0]
  const handleEdit = () => {
    onEdit(payroll);
  };

  return (
    <div className="bg-white shadow rounded-lg p-4 w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold">Payroll #{payroll.payroll_id}</h3>
        <button
          onClick={handleEdit}
          className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium py-1 px-2 rounded"
        >
          Edit
        </button>
      </div>
      <div className="mb-2">
        <span className="font-medium">Employee ID:</span> {payroll.employee_id}
      </div>
      <div className="mb-2">
        <span className="font-medium">Payroll Date:</span> {payroll.payroll_date.toLocaleDateString()}
      </div>
      <div className="mb-2">
        <span className="font-medium">Hours Worked:</span> {payroll.hours_worked}
      </div>
      <div className="mb-2">
        <span className="font-medium">Hourly Rate:</span> ${payroll.hourly_rate.toFixed(2)}
      </div>
      <div className="mb-2">
        <span className="font-medium">Gross Pay:</span> ${payroll.gross_pay.toFixed(2)}
      </div>
      <div className="mb-2">
        <span className="font-medium">Taxes:</span> ${payroll.taxes.toFixed(2)}
      </div>
      <div className="mb-2">
        <span className="font-medium">Net Pay:</span> ${payroll.net_pay.toFixed(2)}
      </div>
    </div>
  );
};

export default PayrollCard;

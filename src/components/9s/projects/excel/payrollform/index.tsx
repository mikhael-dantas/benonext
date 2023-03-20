import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';
import { Payroll } from 'src/lib/excel/mockedObjects';

interface Props {
  payroll?: Payroll;
  onSubmit: (payroll: Payroll) => void;
}

const CreatePayrollForm: React.FC<Props> = ({ payroll, onSubmit }) => {
  const [employeeId, setEmployeeId] = useState<number>(payroll?.employee_id || 0);
  const [payrollDate, setPayrollDate] = useState<Date>(payroll?.payroll_date || new Date());
  const [hoursWorked, setHoursWorked] = useState<number>(payroll?.hours_worked || 0);
  const [hourlyRate, setHourlyRate] = useState<number>(payroll?.hourly_rate || 0);
  const [grossPay, setGrossPay] = useState<number>(payroll?.gross_pay || 0);
  const [taxes, setTaxes] = useState<number>(payroll?.taxes || 0);
  const [netPay, setNetPay] = useState<number>(payroll?.net_pay || 0);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const payrollData: Payroll = {
      payroll_id: payroll?.payroll_id || 0,
      employee_id: employeeId,
      payroll_date: payrollDate,
      hours_worked: hoursWorked,
      hourly_rate: hourlyRate,
      gross_pay: grossPay,
      taxes: taxes,
      net_pay: netPay
    };
    onSubmit(payrollData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="employeeId">
          Employee ID
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="employeeId"
          type="number"
          placeholder="Employee ID"
          value={employeeId}
          onChange={(e) => setEmployeeId(parseInt(e.target.value))}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="payrollDate">
          Payroll Date
        </label>
        <DatePicker
          id="payrollDate"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          selected={payrollDate}
          onChange={(date: Date) => setPayrollDate(date)}
          dateFormat="MM/dd/yyyy"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="hoursWorked">
          Hours Worked
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="hoursWorked"
          type="number"
          placeholder="Hours Worked"
          value={hoursWorked}
          onChange={(e) => setHoursWorked(parseInt(e.target.value))}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="hourlyRate">
          Hourly Rate
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="hourlyRate"
          type="number"
          placeholder="Hourly Rate"
          value={hourlyRate}
          onChange={(e) => setHourlyRate(parseInt(e.target.value))}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="grossPay">
          Gross Pay
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="grossPay"
          type="number"
          placeholder="Gross Pay"
          value={grossPay}
          onChange={(e) => setGrossPay(parseInt(e.target.value))}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="taxes">
          Taxes
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="taxes"
          type="number"
          placeholder="Taxes"
          value={taxes}
          onChange={(e) => setTaxes(parseInt(e.target.value))}
        />
      </div>
      <div className="mb-4">
  <label className="block text-gray-700 font-bold mb-2" htmlFor="netPay">
    Net Pay
  </label>
  <input
    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    id="netPay"
    type="number"
    placeholder="Net Pay"
    value={netPay}
    onChange={(e) => setNetPay(parseInt(e.target.value))}
  />
</div>
<div className="flex items-center justify-between">
  <button
    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    type="submit"
  >
    Submit
  </button>
</div>
</form>  
)};

export default CreatePayrollForm;

import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';
import { EmployeeTimesheet } from 'src/lib/excel/mockedObjects';

interface Props {
  timesheet?: EmployeeTimesheet;
  onSubmit: (timesheet: EmployeeTimesheet) => void;
}

const TimesheetForm: React.FC<Props> = ({ timesheet, onSubmit }) => {
  const [employeeId, setEmployeeId] = useState<number>(timesheet?.employee_id || 0);
  const [timesheetDate, setTimesheetDate] = useState<Date>(timesheet?.timesheet_date || new Date());
  const [startTime, setStartTime] = useState<Date>(timesheet?.start_time || new Date());
  const [endTime, setEndTime] = useState<Date>(timesheet?.end_time || new Date());
  const [totalHours, setTotalHours] = useState<number>(timesheet?.total_hours || 0);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const timesheetData: EmployeeTimesheet = {
      timesheet_id: timesheet?.timesheet_id || 0,
      employee_id: employeeId,
      timesheet_date: timesheetDate,
      start_time: startTime,
      end_time: endTime,
      total_hours: totalHours
    };
    onSubmit(timesheetData);
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
        <label className="block text-gray-700 font-bold mb-2" htmlFor="timesheetDate">
          Timesheet Date
        </label>
        <DatePicker
          id="timesheetDate"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          selected={timesheetDate}
          onChange={(date: Date) => setTimesheetDate(date)}
          dateFormat="MM/dd/yyyy"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="startTime">
          Start Time
        </label>
        <DatePicker
          id="startTime"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          selected={startTime}
          onChange={(date: Date) => setStartTime(date)}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={15}
          timeCaption="Time"
          dateFormat="h:mm aa"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="endTime">
          End Time
        </label>
        <DatePicker
          id="endTime"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          selected={endTime}
          onChange={(date: Date) => setEndTime(date)}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={15}
          timeCaption="Time"
          dateFormat="h:mm aa"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="totalHours">
          Total Hours
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="totalHours"
          type="number"
          placeholder="Total Hours"
          value={totalHours}
          onChange={(e) => setTotalHours(parseInt(e.target.value))}
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
  );
  
};

export default TimesheetForm;

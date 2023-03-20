import React from 'react';
import { EmployeeTimesheet } from 'src/lib/excel/mockedObjects';
import { format } from 'date-fns';

interface TimesheetCardProps {
  timesheet: EmployeeTimesheet;
}

const TimesheetCard: React.FC<TimesheetCardProps> = ({ timesheet }) => {
  return (
    <div className="border border-gray-200 rounded p-4">
      <div className="font-semibold text-xl mb-2">
        Timesheet ID: {timesheet.timesheet_id}
      </div>
      <div className="text-sm text-gray-600">
        Date: {format(timesheet.timesheet_date, 'MM/dd/yyyy')}
      </div>
      <div className="text-sm text-gray-600">
        Start Time: {format(timesheet.start_time, 'HH:mm')}
      </div>
      <div className="text-sm text-gray-600">
        End Time: {format(timesheet.end_time, 'HH:mm')}
      </div>
      <div className="text-sm text-gray-600">
        Total Hours: {timesheet.total_hours}
      </div>
      <div className="mt-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded shadow"
          onClick={() => {}}
        >
          Edit
        </button>
      </div>
    </div>
  );
};

export default TimesheetCard;

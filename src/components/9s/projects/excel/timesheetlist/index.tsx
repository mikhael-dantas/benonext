import React from 'react';
import { EmployeeTimesheet } from 'src/lib/excel/mockedObjects';
import TimesheetCard from '../timesheetcard';

interface TimesheetListProps {
  timesheets: EmployeeTimesheet[];
}

const TimesheetList: React.FC<TimesheetListProps> = ({ timesheets }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold mb-4">Timesheets</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {timesheets.map((timesheet) => (
          <TimesheetCard key={timesheet.timesheet_id} timesheet={timesheet} />
        ))}
      </div>
    </div>
  );
};

export default TimesheetList;

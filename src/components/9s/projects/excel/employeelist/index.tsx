import React from 'react';
import { Employee } from 'src/lib/excel/mockedObjects';
import EmployeeCard from '../employeecard';

interface EmployeeListProps {
  employees: Employee[];
}

const EmployeeList: React.FC<EmployeeListProps> = ({ employees }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold mb-4">Employees</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {employees.map((employee) => (
          <EmployeeCard key={employee.employee_id} employee={employee} />
        ))}
      </div>
    </div>
  );
};

export default EmployeeList;

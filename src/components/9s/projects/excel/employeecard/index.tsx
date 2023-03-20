import React from 'react';
import { Employee } from 'src/lib/excel/mockedObjects';

interface EmployeeCardProps {
  employee: Employee;
}

const EmployeeCard: React.FC<EmployeeCardProps> = ({ employee }) => {
  return (
    <div className="border border-gray-200 rounded p-4">
      <div className="font-semibold text-xl mb-2">Employee ID: {employee.employee_id}</div>
      <div className="text-sm text-gray-600">Name: {employee.name}</div>
      <div className="text-sm text-gray-600">Role: {employee.role}</div>
      <div className="text-sm text-gray-600">Contact: {employee.contact}</div>
      <div className="text-sm text-gray-600">Salary: ${employee.salary}</div>
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

export default EmployeeCard;

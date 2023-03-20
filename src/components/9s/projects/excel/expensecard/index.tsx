import React from 'react';
import { Expense } from 'src/lib/excel/mockedObjects';

interface ExpenseCardProps {
  expense: Expense;
}

const ExpenseCard: React.FC<ExpenseCardProps> = ({ expense }) => {
  return (
    <div className="border border-gray-200 rounded p-4">
      <div className="font-semibold text-xl mb-2">Expense ID: {expense.expense_id}</div>
      <div className="text-sm text-gray-600">
        Expense Date: {expense.expense_date.toLocaleDateString()}
      </div>
      <div className="text-sm text-gray-600">Expense Amount: ${expense.expense_amount}</div>
      <div className="text-sm text-gray-600">Expense Category: {expense.expense_category}</div>
      <div className="text-sm text-gray-600">
        Expense Description: {expense.expense_description}
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

export default ExpenseCard;

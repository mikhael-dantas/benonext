import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

interface Expense {
  expense_id: number;
  expense_date: Date;
  expense_amount: number;
  expense_category: string;
  expense_description: string;
}

interface Props {
  expense: Expense | undefined;
  onSubmit: (expense: Expense) => void;
onCancel: () => void;
}

const ExpenseForm: React.FC<Props> = ({ expense, onSubmit, onCancel}) => {
  const [expenseDate, setExpenseDate] = useState<Date | undefined>(expense ? new Date(expense.expense_date) : undefined);
  const [expenseAmount, setExpenseAmount] = useState<number | undefined>(expense ? expense.expense_amount : undefined);
  const [expenseCategory, setExpenseCategory] = useState<string | undefined>(expense ? expense.expense_category : undefined);
  const [expenseDescription, setExpenseDescription] = useState<string | undefined>(expense ? expense.expense_description : undefined);

  const handleExpenseDateChange = (date: Date) => {
    setExpenseDate(date);
  };

  const handleExpenseAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setExpenseAmount(Number(event.target.value));
  };

  const handleExpenseCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setExpenseCategory(event.target.value);
  };

  const handleExpenseDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setExpenseDescription(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!expenseDate || !expenseAmount || !expenseCategory || !expenseDescription) {
      return;
    }
    onSubmit({
      expense_id: expense ? expense.expense_id : Math.floor(Math.random() * 100000), // Generate random ID for new expense
      expense_date: expenseDate,
      expense_amount: expenseAmount,
      expense_category: expenseCategory,
      expense_description: expenseDescription,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="expense_date" className="block text-sm font-medium text-gray-700">
            Expense Date
          </label>
          <DatePicker selected={expenseDate} 
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          onChange={handleExpenseDateChange}
          dateFormat="MM/dd/yyyy"
            />
        </div>
        <div>
          <label htmlFor="expense_amount" className="block text-sm font-medium text-gray-700">
            Expense Amount
          </label>
          <input
            type="number"
            name="expense_amount"
            id="expense_amount"
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            value={expenseAmount}
            onChange={handleExpenseAmountChange}
            required
          />
        </div>
        <div>
          <label htmlFor="expense_category" className="block text-sm font-medium text-gray-700">
            Expense Category
          </label>
          <input
            type="text"
            name="expense_category"
            id="expense_category"
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            value={expenseCategory}
            onChange={handleExpenseCategoryChange}
            required
          />
        </div>
        <div>
          <label htmlFor="expense_description" className="block text-sm font-medium text-gray-700">
            Expense Description
          </label>
          <input
            type="text"
            name="expense_description"
            id="expense_description"
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            value={expenseDescription}
            onChange={handleExpenseDescriptionChange}
            required
          />
        </div>
      </div>
      <div className="mt-6">
        <button
          type="submit"
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Save
        </button>
        <button
          type="button"
          className="ml-3 inline-flex justify-center py-2 px-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={() => {}}
        >
            Cancel
        </button>
        </div>
    </form>
    );
        
};

export default ExpenseForm;

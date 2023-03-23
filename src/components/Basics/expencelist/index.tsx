import React from 'react';
import { Expense } from 'src/lib/data-structure';
import ExpenseCard from '../expensecard';

interface ExpenseListProps {
  expenses: Expense[];
}

const ExpenseList: React.FC<ExpenseListProps> = ({ expenses }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold mb-4">Expenses</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {expenses.map((expense) => (
          <ExpenseCard key={expense.expense_id} expense={expense} />
        ))}
      </div>
    </div>
  );
};

export default ExpenseList;

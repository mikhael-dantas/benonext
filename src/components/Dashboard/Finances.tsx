// hooks/useCurrentFinances.js
import { useQuery, gql } from '@apollo/client';

const GET_TOTAL_PAID_INVOICES = gql`
  query GetTotalPaidInvoices {
    invoices(where: { status: "paid" }) {
      total_amount
    }
  }
`;

const GET_TOTAL_EXPENSES = gql`
  query GetTotalExpenses {
    expenses {
      expense_amount
    }
  }
`;

export const useCurrentFinances = () => {
  const invoiceQuery = useQuery(GET_TOTAL_PAID_INVOICES);
  const expenseQuery = useQuery(GET_TOTAL_EXPENSES);

  return { invoiceQuery, expenseQuery };
};








// mocks/useCurrentFinancesMock.js
export const useCurrentFinancesMock = () => {
    const invoiceQueryMock = {
      data: {
        invoices: [
          { total_amount: 1000 },
          { total_amount: 2000 },
          { total_amount: 1500 },
        ],
      },
      loading: false,
      error: null,
    };
  
    const expenseQueryMock = {
      data: {
        expenses: [
          { expense_amount: 500 },
          { expense_amount: 300 },
          { expense_amount: 400 },
        ],
      },
      loading: false,
      error: null,
    };
  
    return { invoiceQuery: invoiceQueryMock, expenseQuery: expenseQueryMock };
  };
  









// components/CurrentFinances.js
import React from 'react';

const CurrentFinances = () => {
  const { invoiceQuery, expenseQuery } = useCurrentFinancesMock();

  const { data: invoiceData, loading: invoiceLoading, error: invoiceError } = invoiceQuery;
  const { data: expenseData, loading: expenseLoading, error: expenseError } = expenseQuery;

  if (invoiceLoading || expenseLoading) return <div>Loading...</div>;
  if (invoiceError || expenseError) return <div>Error! Please try again.</div>;

  const totalPaidInvoices = invoiceData.invoices.reduce((sum, invoice) => sum + invoice.total_amount, 0);
  const totalExpenses = expenseData.expenses.reduce((sum, expense) => sum + expense.expense_amount, 0);
  const currentFinances = totalPaidInvoices - totalExpenses;

  return (
    <div className="flex items-center justify-between p-6 bg-white rounded-lg shadow-md">
    <div>
      <h2 className="text-gray-600 font-semibold text-lg mb-2">Current Finances: <span className="text-indigo-500">This</span> Month:</h2>
      <p className="text-gray-800 font-bold text-3xl">{currentFinances.toFixed(2)}</p>
    </div>
    <div className="ml-4">
      <svg className="h-12 w-12 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
      </svg>
    </div>
  </div>
  );
};

export default CurrentFinances;

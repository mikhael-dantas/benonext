// hooks/useTotalIncome.ts
import { useQuery, gql } from '@apollo/client';

interface Invoice {
  total_amount: number;
}

interface InvoiceData {
  invoices: Invoice[];
}

interface QueryVars {
  days: number;
}

// const GET_TOTAL_INCOME = gql`
//   query GetTotalIncome($days: Int!) {
//     invoices(where: { status: "paid", created_at_gte: DateTimeMinusDays(days: $days) }) {
//       total_amount
//     }
//   }
// `;

// export const useTotalIncome = (days: number) => {
//   const query = useQuery<InvoiceData, QueryVars>(GET_TOTAL_INCOME, {
//     variables: { days },
//   });

//   return query;
// };













// components/TotalIncome.tsx
import React from 'react';

interface TotalIncomeProps {
  days: number;
}

const TotalIncome: React.FC<TotalIncomeProps> = ({ days }) => {
  const { data, loading, error } = useTotalIncomeMock(days);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error! Please try again.</div>;

  const totalIncome = data?.invoices.reduce((sum, invoice) => sum + invoice.total_amount, 0) || 0;

return (
  <div className="flex items-center justify-between p-6 bg-white rounded-lg shadow-md">
    <div>
      <h2 className="text-gray-600 font-semibold text-lg mb-2">Total Income in the Last <span className="text-indigo-500">{days}</span> Days:</h2>
      <p className="text-gray-800 font-bold text-3xl">{totalIncome.toFixed(2)}</p>
    </div>
    <div className="ml-4">
      <svg className="h-12 w-12 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
      </svg>
    </div>
  </div>

  );
};

export default TotalIncome;










// mocks/useTotalIncomeMock.ts
import { ApolloQueryResult } from '@apollo/client';

interface Invoice {
  total_amount: number;
}

interface InvoiceData {
  invoices: Invoice[];
}

export const useTotalIncomeMock = (days: number): ApolloQueryResult<InvoiceData> => {
  const data: InvoiceData = {
    invoices: [
      { total_amount: 1000 },
      { total_amount: 2000 },
      { total_amount: 1500 },
    ],
  };

  return {
    data,
    loading: false,
    error: null,
    // fetchMore: () => Promise.resolve(data),
    // refetch: () => Promise.resolve(data),
    // startPolling: () => {},
    // stopPolling: () => {},
    // subscribeToMore: () => () => {},
    networkStatus: 7,
    // client: null as any,
    // called: true,
    // variables: { days },
  };
};

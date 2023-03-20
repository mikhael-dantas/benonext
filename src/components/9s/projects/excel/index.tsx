import React from 'react';
// import TotalClients from './TotalClients';
// import TotalSubscriptions from './TotalSubscriptions';
// import CurrentFinances from './CurrentFinances';
// import ExpectedIncome from './ExpectedIncome';
// import EmployeeMetrics from './EmployeeMetrics';

const Dashboard: React.FC = () => {
  const handleClick = (name: string) => {
    console.log(`Clicked ${name} button`);
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-semibold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        <button
          className="bg-blue-500 text-white rounded-lg p-6 text-xl font-semibold"
          onClick={() => handleClick('Total Clients')}
        >
          Total Clients
        </button>
        <button
          className="bg-green-500 text-white rounded-lg p-6 text-xl font-semibold"
          onClick={() => handleClick('Total Subscriptions')}
        >
          Total Subscriptions
        </button>
        <button
          className="bg-yellow-500 text-white rounded-lg p-6 text-xl font-semibold"
          onClick={() => handleClick('Current Finances')}
        >
          Current Finances
        </button>
        <button
          className="bg-red-500 text-white rounded-lg p-6 text-xl font-semibold"
          onClick={() => handleClick('Expected Income')}
        >
          Expected Income
        </button>
        <button
          className="bg-indigo-500 text-white rounded-lg p-6 text-xl font-semibold"
          onClick={() => handleClick('Employee Metrics')}
        >
          Employee Metrics
        </button>
      </div>
      <div>
        oi
        {/* <TotalClients />
        <TotalSubscriptions />
        <CurrentFinances />
        <ExpectedIncome />
        <EmployeeMetrics /> */}
      </div>
    </div>
  );
};

export default Dashboard;

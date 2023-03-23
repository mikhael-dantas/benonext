import React from 'react';

interface TableProps {
  data: {
    month: string;
    revenue: number;
    expenses: number;
    profit: number;
    percentage: number;
  }[];
}

const Table: React.FC<TableProps> = ({ data }) => {
  return (
    <div className="w-full px-6 py-4 bg-white rounded-lg shadow-md">
      <h2 className="text-lg font-semibold text-gray-700 capitalize">resultado anual</h2>
      <table className="mt-4 w-full text-md">
        <thead>
          <tr className="border-b border-gray-300">
            <th className="py-2 text-left">mês</th>
            <th className="py-2 text-left">receita</th>
            <th className="py-2 text-left">despesa</th>
            <th className="py-2 text-left">lucro</th>
            <th className="py-2 text-left">%</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.month}>
              <td className="py-2">{item.month}</td>
              <td className="py-2">{item.revenue}</td>
              <td className="py-2">{item.expenses}</td>
              <td className="py-2">{item.profit}</td>
              <td className="py-2">{item.percentage}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

import { useState } from 'react';

const data = [
  { month: 'January', revenue: 10000, expenses: 8000, profit: 2000, percentage: 20 },
  { month: 'February', revenue: 12000, expenses: 9000, profit: 3000, percentage: 25 },
  { month: 'March', revenue: 15000, expenses: 10000, profit: 5000, percentage: 33 },
    { month: 'April', revenue: 18000, expenses: 12000, profit: 6000, percentage: 33 },
    { month: 'May', revenue: 20000, expenses: 13000, profit: 7000, percentage: 33 },
    { month: 'June', revenue: 22000, expenses: 14000, profit: 8000, percentage: 33 },
    { month: 'July', revenue: 25000, expenses: 16000, profit: 9000, percentage: 33 },
    { month: 'August', revenue: 28000, expenses: 18000, profit: 10000, percentage: 33 },
    { month: 'September', revenue: 30000, expenses: 19000, profit: 11000, percentage: 33 },
    { month: 'October', revenue: 32000, expenses: 20000, profit: 12000, percentage: 33 },
    { month: 'November', revenue: 35000, expenses: 22000, profit: 13000, percentage: 33 },
    { month: 'December', revenue: 38000, expenses: 24000, profit: 14000, percentage: 33 },
];



interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <button
      className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-md focus:outline-none"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

interface ButtonGroupProps {
  onSendAllClients: () => void;
  onScheduleMessage: () => void;
  onExportToPdf: () => void;
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({
  onSendAllClients,
  onScheduleMessage,
  onExportToPdf,
}) => {
  return (
    <div className="w-full flex justify-between items-center bg-white rounded-lg shadow-md px-6 py-4">
      <Button onClick={onSendAllClients}>Enviar mensagem para todos os clientes</Button>
      <Button onClick={onScheduleMessage}>Agendar mensagem para daqui 5 dias</Button>
      <Button onClick={onExportToPdf}>Exportar dados para PDF</Button>
    </div>
  );
};



const Dashboardsss: React.FC = () => {
  const [tableData, setTableData] = useState(data);

  const handleSendAllClients = () => {
    // implement send all clients logic here
  };

  const handleScheduleMessage = () => {
    // implement schedule message logic here
  };

  const handleExportToPdf = () => {
    // implement export to PDF logic here
  };
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 col-span-2">
      <Table data={tableData} />
      <div className="flex justify-center items-center h-screen bg-gray-100">
      <ButtonGroup
        onSendAllClients={handleSendAllClients}
        onScheduleMessage={handleScheduleMessage}
        onExportToPdf={handleExportToPdf}
      />
    </div>
    </div>
  );
};

export default Dashboardsss;

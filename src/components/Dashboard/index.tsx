import React from 'react';
import CurrentFinances from './Finances';
import TotalIncome from './TotalIncome';
import { ChartTest } from './Chart';
import Dashboardsss from './dashboard';

// import { Container } from './styles';

export const Dashboard: React.FC = () => {
  const totalActiveClients = 100;
  const clientsAboutToExpire = 10;
  const clientsFarFromExpiring = 20;
  const expiredClients = 30;
  const clientsRenewed = 40;

  return (<>
  <div className="p-6 bg-white rounded-lg shadow-md">
  <div className="text-gray-600 font-semibold text-lg mb-4">Client Data Overview</div>
  <div className="grid grid-cols-5 gap-4">
    <div className="p-4 bg-indigo-500 text-white rounded-lg shadow-md">
      <div className="text-sm font-semibold uppercase mb-2">Total Active Clients</div>
      <div className="text-3xl font-bold">{totalActiveClients}</div>
    </div>
    <div className="p-4 bg-green-500 text-white rounded-lg shadow-md">
      <div className="text-sm font-semibold uppercase mb-2">Clients About to Expire</div>
      <div className="text-3xl font-bold">{clientsAboutToExpire}</div>
    </div>
    <div className="p-4 bg-blue-500 text-white rounded-lg shadow-md">
      <div className="text-sm font-semibold uppercase mb-2">Clients Far from Expiring</div>
      <div className="text-3xl font-bold">{clientsFarFromExpiring}</div>
    </div>
    <div className="p-4 bg-yellow-500 text-white rounded-lg shadow-md">
      <div className="text-sm font-semibold uppercase mb-2">Expired Clients</div>
      <div className="text-3xl font-bold">{expiredClients}</div>
    </div>
    <div className="p-4 bg-pink-500 text-white rounded-lg shadow-md">
      <div className="text-sm font-semibold uppercase mb-2">Clients Renewed</div>
      <div className="text-3xl font-bold">{clientsRenewed}</div>
    </div>
  </div>
</div>

  <div className="grid grid-cols-2 gap-4 p-4">
    <CurrentFinances/>
    <TotalIncome days={30}/>
    <ChartTest/>
    <Dashboardsss/>
  </div>
  </>
  )

}

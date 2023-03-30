import React from "react";
import TotalUsers from "./TotalUsers";
import TotalClients from "./TotalClients";
import TotalApps from "./TotalApps";
import TotalDevices from "./TotalDevices";
import TotalInvoices from "./TotalInvoices";
import TotalPayments from "./TotalPayments";
import TotalSubscriptions from "./TotalSubscriptions";
import TotalSubscriptionPayments from "./TotalSubscriptionPayments";
import TotalExpenses from "./TotalExpenses";

export const TrackedNumbers = () => {
  return (
    <div className="container mx-auto px-4 col-span-2">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="col-span-1">
          <TotalUsers />
        </div>
        <div className="col-span-1">
          <TotalClients />
        </div>
        <div className="col-span-1">
          <TotalApps />
        </div>
        <div className="col-span-1">
          <TotalDevices />
        </div>
        <div className="col-span-1">
          <TotalInvoices />
        </div>
        <div className="col-span-1">
          <TotalPayments />
        </div>
        <div className="col-span-1">
          <TotalSubscriptions />
        </div>
        <div className="col-span-1">
          <TotalSubscriptionPayments />
        </div>
        <div className="col-span-1">
          <TotalExpenses />
        </div>
      </div>
    </div>
  );
};


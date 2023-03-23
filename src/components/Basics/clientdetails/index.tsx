import React, { useEffect } from 'react';
import { Client, User, Device, App, Payment, Subscription, Invoice, mockedClients, mockedUsers, mockedDevices, mockedApps, mockedPayments, mockedSubscriptions, mockedInvoices } from 'src/lib/data-structure';
import UserList from '../userlist';
import DeviceList from '../devicelist';
import AppList from '../applist';
import PaymentList from '../paymentlist';
import SubscriptionList from '../subscriptionlist';
import InvoiceList from '../invoicelist';
import { GetServerSideProps } from 'next';

interface ClientDetailsProps {
  client: Client;
  users: User[];
  devices: Device[];
  apps: App[];
  payments: Payment[];
  subscriptions: Subscription[];
  invoices: Invoice[];
}

const ClientDetails: React.FC<ClientDetailsProps> = ({
  client: receivedClient,
  users: receivedUsers,
  devices: receivedDevices,
  apps: receivedApps,
  payments: receivedPayments,
  subscriptions: receivedSubscriptions,
  invoices: receivedInvoices,
}) => {
    
    const [client, setClient] = React.useState<Client>(null);
    const [users, setUsers] = React.useState<User[]>(null);
    const [devices, setDevices] = React.useState<Device[]>(null);
    const [apps, setApps] = React.useState<App[]>(null);
    const [payments, setPayments] = React.useState<Payment[]>(null);
    const [subscriptions, setSubscriptions] = React.useState<Subscription[]>(null);
    const [invoices, setInvoices] = React.useState<Invoice[]>(null);
    

    useEffect(() => {
        setClient(mockedClients[0]);
        setUsers(mockedUsers);
        setDevices(mockedDevices);
        setApps(mockedApps);
        setPayments(mockedPayments);
        setSubscriptions(mockedSubscriptions);
        setInvoices(mockedInvoices);
    }, []);

    if (!client) {
        return <div>Client not found</div>;
    }
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold mb-4">Client Details: {client.name}</h2>
      <UserList users={users} />
      <DeviceList devices={devices} />
      <AppList apps={apps} />
      <PaymentList payments={payments} />
      <SubscriptionList subscriptions={subscriptions} />
      <InvoiceList invoices={invoices} />
    </div>
  );
};

export default ClientDetails;


// export function getServerSideProps() {
//     const client = mockedClients[0];
//     const users = mockedUsers;
//     const devices = mockedDevices;
//     const apps = mockedApps;
//     const payments = mockedPayments;
//     const subscriptions = mockedSubscriptions;
//     const invoices = mockedInvoices;
//     return {
//         props: {
//             client,
//             users,
//             devices,
//             apps,
//             payments,
//             subscriptions,
//             invoices,
//         },
//     };
// };
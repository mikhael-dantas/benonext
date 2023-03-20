import React from "react";
import {
  Client,
  User,
  Device,
  App,
  Payment,
  Subscription,
  Invoice,
  Expense,
  Employee,
  EmployeeTimesheet,
  Payroll,
  mockedInvoices,
  mockedExpenses,
  mockedEmployees,
  mockedEmployeeTimesheets,
} from "src/lib/excel/mockedObjects";
import AppForm from "../appform";
import ClientForm from "../clientform";
import DeviceForm from "../deviceform";
import EmployeeForm from "../employeeform";
import ExpenseForm from "../expensesform";
import InvoiceForm from "../invoiceform";
import PaymentForm from "../paymentform";
import SubscriptionForm from "../subscriptionform";
import TimesheetForm from "../timesheetform";
import UserForm from "../userform";
import CreatePayrollForm from "../payrollform";

interface RegistryInsertPageProps {
  // Define any required props, such as handlers to receive the new data
}

const RegistryInsertPage: React.FC<RegistryInsertPageProps> = (props) => {
  const handleClientSubmit = (client: Client) => {
    // Handle client submission logic
  };

  const handleUserSubmit = (user: User) => {
    // Handle user submission logic
  };

    const handleDeviceSubmit = (device: Device) => {
    // Handle device submission logic
    };

    const handleAppSubmit = (app: App) => {
    // Handle app submission logic
    };

    const handlePaymentSubmit = (payment: Payment) => {};
    const handleSubscriptionSubmit = (subscription: Subscription) => {};
    const handleInvoiceSubmit = (invoice: Invoice) => {};
    const handleExpenseSubmit = (expense: Expense) => {};
    const handleEmployeeSubmit = (employee: Employee) => {};
    const handleTimesheetSubmit = (timesheet: EmployeeTimesheet) => {};
    const handlePayrollSubmit = (payroll: Payroll) => {};
  // ... other handlers

  return (
    <div className="registry-insert-page">
      <ClientForm onSubmit={handleClientSubmit} />
      <UserForm onSubmit={handleUserSubmit} />
      <DeviceForm onSubmit={handleDeviceSubmit} />
      <AppForm onSubmit={handleAppSubmit} />
      <PaymentForm onSubmit={handlePaymentSubmit} />
      <SubscriptionForm onSubmit={handleSubscriptionSubmit} />
      <InvoiceForm onSubmit={handleInvoiceSubmit} onCancel={() => {}} invoices={mockedInvoices}/>
      <ExpenseForm onSubmit={handleExpenseSubmit} expense={mockedExpenses[0]} onCancel={()=>{}}/>
      <EmployeeForm onSubmit={handleEmployeeSubmit} employee={mockedEmployees[0]} onCancel={()=>{}}/>
      <TimesheetForm onSubmit={handleTimesheetSubmit} timesheet={mockedEmployeeTimesheets[0]}/>
      <CreatePayrollForm onSubmit={handlePayrollSubmit}/>
    </div>
  );
};

export default RegistryInsertPage;

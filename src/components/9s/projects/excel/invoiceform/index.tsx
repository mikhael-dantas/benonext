import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import { registerLocale } from 'react-datepicker';
import ptBR from 'date-fns/locale/pt-BR'; // Replace with your preferred locale
import { Invoice, mockedInvoices } from 'src/lib/excel/mockedObjects';

registerLocale('pt-BR', ptBR); // Replace with your preferred locale

interface Props {
  invoices: Invoice[];
    onSubmit: (invoice: Invoice) => void;
    onCancel: () => void;
}

const InvoiceForm: React.FC<Props> = ({ invoices,
    onSubmit,
    onCancel,
}) => {
    invoices = mockedInvoices
  const [clientId, setClientId] = useState<number>(0);
  const [invoiceDate, setInvoiceDate] = useState<Date>(new Date());
  const [dueDate, setDueDate] = useState<Date>(new Date());
  const [totalAmount, setTotalAmount] = useState<number>(0);
  const [status, setStatus] = useState<string>('');
  const [paymentMethod, setPaymentMethod] = useState<string>('');
  const [receiptNumber, setReceiptNumber] = useState<string>('');
  const [name, setName] = useState<string>('');

  useEffect(() => {
    console.log(invoiceDate)
    }, [invoiceDate])

    const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setName(value);
    };
  const handleChangeClientId = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = parseInt(event.target.value);
    setClientId(value);
  };

  const handleChangeInvoiceDate = (date: Date) => {
    setInvoiceDate(date);
  };

  const handleChangeDueDate = (date: Date) => {
    setDueDate(date);
  };

  const handleChangeTotalAmount = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(event.target.value);
    setTotalAmount(value);
  };

  const handleChangeStatus = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setStatus(value);
  };

  const handleChangePaymentMethod = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setPaymentMethod(value);
  };

  const handleChangeReceiptNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setReceiptNumber(value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const invoiceData: Invoice = {
        client_id: clientId,
        invoice_date: invoiceDate,
        due_date: dueDate,
        total_amount: totalAmount,
        status,
        payment_method: paymentMethod,
        receipt_number: receiptNumber,
        name,
        invoice_id: 0,
    };
    onSubmit(invoiceData);
    };

  return (
    <form className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-medium mb-4">Invoice Information</h2>
      <div className="mb-4">
        <label className="block font-medium mb-2" htmlFor="name">
            Name
        </label>
        <input
            className="border border-gray-400 p-2 rounded w-full"
            id="name"
            name="name"
            type="text"
            value={name}
            onChange={handleChangeName}
        />
      </div>
      <div className="mb-4">
        <label className="block font-medium mb-2" htmlFor="client">
          Client
        </label>
        <select
          className="border border-gray-400 p-2 rounded w-full"
          id="client"
          name="client"
          value={clientId}
          onChange={handleChangeClientId}
        >
          <option value="">Select a client</option>
          {invoices.map((invoice) => (
            <option key={invoice.client_id} value={invoice.client_id}>
              {invoice.client_id} - {invoice.name}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label className="block font-medium mb-2" htmlFor="invoiceDate">
          Invoice Date
        </label>
        <DatePicker
          className="border border-gray-400 p-2 rounded w-full"
          selected={invoiceDate}
          onChange={handleChangeInvoiceDate}
          dateFormat="dd/MM/yyyy"
          locale="pt-BR" // Replace with your preferred locale
        />
      </div>
      <div className="mb-4">
        <label className="block font-medium mb-2" htmlFor="dueDate">
          Due Date
        </label>
        <DatePicker
          className="border border-gray-400 p-2 rounded w-full"
          selected={dueDate}
          onChange={handleChangeDueDate}
          dateFormat="dd/MM/yyyy"
          locale="pt-BR" // Replace with your preferred locale
        />
      </div>
      <div className="mb-4">
        <label className="block font-medium mb-2" htmlFor="totalAmount">
          Total Amount
        </label>
        <input
          className="border border-gray-400 p-2 rounded w-full"
          id="totalAmount"
          name="totalAmount"
          type="number"
          step="0.01"
          min="0"
          value={totalAmount}
          onChange={handleChangeTotalAmount}
        />
      </div>
      <div className="mb-4">
        <label className="block font-medium mb-2" htmlFor="status">
          Status
        </label>
        <input
          className="border border-gray-400 p-2 rounded w-full"
          id="status"
          name="status"
          type="text"
          value={status}
          onChange={handleChangeStatus}
        />
      </div>
      <div className="mb-4">
        <label className="block font-medium mb-2" htmlFor="paymentMethod">
          Payment Method
        </label>
        <input
          className="border border-gray-400 p-2 rounded w-full"
          id="paymentMethod"
          name="paymentMethod"
          type="text"
          value={paymentMethod}
          onChange={handleChangePaymentMethod}
        />
      </div>
      <div className="mb-4">
        <label className="block font-medium mb-2" htmlFor="receiptNumber">
          Receipt Number
        </label>
        <input
          className="border border-gray-400 p-2 rounded w-full"
          id="receiptNumber"
          name="receiptNumber"
          type="text"
          value={receiptNumber}
          onChange={handleChangeReceiptNumber}
        />
      </div>
      <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        onSubmit={(e) => {handleSubmit(e)}}
      >
        Submit
      </button>
      <button
        className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
        onClick={onCancel}
        >
        Cancel
        </button>
    </form>
    );
};

export default InvoiceForm;

import React from 'react';
import { Invoice } from 'src/lib/data-structure';

interface InvoiceCardProps {
  invoice: Invoice;
}

const InvoiceCard: React.FC<InvoiceCardProps> = ({ invoice }) => {
  return (
    <div className="border border-gray-200 rounded p-4">
      <div className="font-semibold text-xl mb-2">Invoice ID: {invoice.invoice_id}</div>
      <div className="text-sm text-gray-600">Client ID: {invoice.client_id}</div>
      <div className="text-sm text-gray-600">
        Invoice Date: {invoice.invoice_date.toLocaleDateString()}
      </div>
      <div className="text-sm text-gray-600">
        Due Date: {invoice.due_date.toLocaleDateString()}
      </div>
      <div className="text-sm text-gray-600">Total Amount: ${invoice.total_amount}</div>
      <div className="text-sm text-gray-600">Status: {invoice.status}</div>
      <div className="text-sm text-gray-600">
        Payment Method: {invoice.payment_method}
      </div>
      <div className="text-sm text-gray-600">
        Receipt Number: {invoice.receipt_number}
      </div>
      <div className="mt-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded shadow"
          onClick={() => {}}
        >
          Edit
        </button>
      </div>
    </div>
  );
};

export default InvoiceCard;

import React from 'react';
import { Invoice } from 'src/lib/data-structure';
import InvoiceCard from '../invoicecard';

interface InvoiceListProps {
  invoices: Invoice[];
}

const InvoiceList: React.FC<InvoiceListProps> = ({ invoices }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold mb-4">Invoices</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {invoices.map((invoice) => (
          <InvoiceCard key={invoice.invoice_id} invoice={invoice} />
        ))}
      </div>
    </div>
  );
};

export default InvoiceList;

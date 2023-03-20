import React from 'react';
import { Payment } from 'src/lib/excel/mockedObjects';
import PaymentCard from '../paymentcard';

interface PaymentListProps {
  payments: Payment[];
}

const PaymentList: React.FC<PaymentListProps> = ({ payments }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold mb-4">Payments</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {payments.map((payment) => (
          <PaymentCard key={payment.payment_id} payment={payment} />
        ))}
      </div>
    </div>
  );
};

export default PaymentList;

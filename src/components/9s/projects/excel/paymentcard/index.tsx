import React from 'react';
import { Payment } from 'src/lib/excel/mockedObjects';

interface PaymentCardProps {
  payment: Payment;
}

const PaymentCard: React.FC<PaymentCardProps> = ({ payment }) => {
  return (
    <div className="border border-gray-200 rounded p-4">
      <div className="font-semibold text-xl mb-2">
        Payment ID: {payment.payment_id}
      </div>
      <div className="text-sm text-gray-600">Client ID: {payment.client_id}</div>
      <div className="text-sm text-gray-600">
        Expected Value: {payment.expected_value}
      </div>
      <div className="text-sm text-gray-600">
        Paid Value: {payment.paid_value}
      </div>
      <div className="text-sm text-gray-600">
        Total Value: {payment.total_value}
      </div>
      <div className="text-sm text-gray-600">
        Last Payment Date: {payment.last_payment_date.toLocaleDateString()}
      </div>
      <div className="text-sm text-gray-600">
        Payment Method: {payment.payment_method}
      </div>
      <div className="text-sm text-gray-600">
        Receipt Number: {payment.receipt_number}
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

export default PaymentCard;

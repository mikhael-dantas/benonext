import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { Payment } from "src/lib/data-structure";

import "react-datepicker/dist/react-datepicker.css";

interface PaymentFormProps {
  payment?: Payment;
  onSubmit: (payment: Payment) => void;
}

const PaymentForm: React.FC<PaymentFormProps> = ({ payment, onSubmit }) => {
  const [paymentId, setPaymentId] = useState(payment?.payment_id || 0);
  const [clientId, setClientId] = useState(payment?.client_id || 0);
  const [expectedValue, setExpectedValue] = useState(payment?.expected_value || 0);
  const [paidValue, setPaidValue] = useState(payment?.paid_value || 0);
  const [totalValue, setTotalValue] = useState(payment?.total_value || 0);
  const [lastPaymentDate, setLastPaymentDate] = useState<Date | null>(payment?.last_payment_date || null);
  const [paymentMethod, setPaymentMethod] = useState(payment?.payment_method || "");
  const [receiptNumber, setReceiptNumber] = useState(payment?.receipt_number || "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    onSubmit({
      payment_id: paymentId,
      client_id: clientId,
      expected_value: expectedValue,
      paid_value: paidValue,
      total_value: totalValue,
      last_payment_date: lastPaymentDate!,
      payment_method: paymentMethod,
      receipt_number: receiptNumber,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="payment-form">
      <label>
        Payment ID:
        <input type="number" value={paymentId} onChange={(e) => setPaymentId(parseInt(e.target.value))} />
      </label>
      <label>
        Client ID:
        <input type="number" value={clientId} onChange={(e) => setClientId(parseInt(e.target.value))} />
      </label>
      <label>
        Expected Value:
        <input type="number" value={expectedValue} onChange={(e) => setExpectedValue(parseFloat(e.target.value))} />
      </label>
      <label>
        Paid Value:
        <input type="number" value={paidValue} onChange={(e) => setPaidValue(parseFloat(e.target.value))} />
      </label>
      <label>
        Total Value:
        <input type="number" value={totalValue} onChange={(e) => setTotalValue(parseFloat(e.target.value))} />
      </label>
      <label>
        Last Payment Date:
        <DatePicker selected={lastPaymentDate} onChange={(date: Date) => setLastPaymentDate(date)} />
      </label>
      <label>
        Payment Method:
        <input type="text" value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)} />
      </label>
      <label>
        Receipt Number:
        <input type="text" value={receiptNumber} onChange={(e) => setReceiptNumber(e.target.value)} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default PaymentForm;

import { useState } from "react";
import axios from "axios";

const CheckoutPage = () => {
  const [paymentLink, setPaymentLink] = useState("");

  const handleCheckout = async () => {
    const response = await axios.post("/api/payments/mercadopago", { amount: 10 });
    setPaymentLink(response.data.payment_link);
  };

  return (
    <div className="flex items-center justify-center flex-col">
      <button
        onClick={handleCheckout}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Checkout
      </button>
      {paymentLink && (
        <a href={paymentLink} className="text-blue-500 hover:text-blue-700">
          Pay with MercadoPago
        </a>
      )}
    </div>
  );
};

export default CheckoutPage;

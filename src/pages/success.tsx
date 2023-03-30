import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const SuccessPage = () => {
  const router = useRouter();
  const [paymentId, setPaymentId] = useState("");

  useEffect(() => {
    const { payment_id } = router.query;
    if (payment_id) {
      setPaymentId(payment_id as string);
    }
  }, [router.query]);

  return (
    <div>
      <h1>Payment Successful!</h1>
      {paymentId && <p>Payment ID: {paymentId}</p>}
    </div>
  );
};

export default SuccessPage;

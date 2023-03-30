import { useRouter } from "next/router";

const PendingPage = () => {
  const router = useRouter();
  const { pending_reason } = router.query;

  return (
    <div>
      <h1>Payment Pending</h1>
      {pending_reason && <p>Pending Reason: {pending_reason}</p>}
    </div>
  );
};

export default PendingPage;

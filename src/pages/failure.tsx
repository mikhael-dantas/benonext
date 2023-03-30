import { useRouter } from "next/router";

const FailurePage = () => {
  const router = useRouter();
  const { error } = router.query;

  return (
    <div>
      <h1>Payment Failed</h1>
      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default FailurePage;

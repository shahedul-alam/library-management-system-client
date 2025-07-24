import BorrowTable from "@/components/borrowSummary/BorrowTable";
import { useGetAllBorrowsQuery } from "@/redux/apis/borrowApi";
import Error from "@/shared/Error";
import Loading from "@/shared/Loading";

const BorrowSummary = () => {
  const { data, isLoading, isError, error } = useGetAllBorrowsQuery(undefined);

  if (isLoading) return <Loading />;
  if (isError) return <Error errorData={error} />;
  return (
    <section className="container mx-auto min-h-screen px-4">
      <BorrowTable data={data.data} />
    </section>
  );
};

export default BorrowSummary;

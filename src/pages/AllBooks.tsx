import BookTable from "../components/allBooks/BookTable";
import { useGetAllBooksQuery } from "../redux/apis/bookApi";
import Error from "../shared/Error";
import Loading from "../shared/Loading";

const AllBooks = () => {
  const { data, isLoading, isError, error } = useGetAllBooksQuery(undefined);

  if (isLoading) return <Loading />;
  if (isError) return <Error errorData={error} />;

  return (
    <section className="container mx-auto min-h-screen">
      <BookTable data={data.data} />
    </section>
  );
};

export default AllBooks;

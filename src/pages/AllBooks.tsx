import BookTable from "../components/allBooks/BookTable";
import { useGetAllBooksQuery } from "../redux/apis/libraryApi";
import Error from "../shared/Error";
import Loading from "../shared/Loading";

const AllBooks = () => {
  const { data, isLoading, isError, error } = useGetAllBooksQuery(undefined);

  if (isLoading) return <Loading full={true} />;
  if (isError) return <Error errorData={error} />;

  return (
    <section className="container mx-auto min-h-screen px-4">
      <BookTable data={data.data} />
    </section>
  );
};

export default AllBooks;

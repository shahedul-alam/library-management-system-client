import type { Book } from "@/types/book.types";
import BookRow from "./BookRow";

const BookTable = ({ data }: { data: Book[] }) => {
  return (
    <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 my-12">
      <table className="table">
        <thead>
          <tr>
            <th></th>
            <th>Title</th>
            <th>Author</th>
            <th>Genre</th>
            <th>ISBN</th>
            <th>Copies</th>
            <th>Availability</th>
            <th>Edit</th>
            <th>Delete</th>
            <th>Borrow</th>
          </tr>
        </thead>
        <tbody>
          {data.map((book, index) => (
            <BookRow key={book._id} data={book} index={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookTable;

import EditBookDialog from "./EditBookDialog";
import BorrowBook from "./BorrowBook";
import type { Book } from "@/types/book.types";
import DeleteBook from "./DeleteBook";

const BookRow = ({ data, index }: { data: Book; index: number }) => {
  const { author, available, copies, genre, isbn, title } = data;
  return (
    <tr className="hover:bg-base-300">
      <th>{index + 1}</th>
      <td>{title}</td>
      <td>{author}</td>
      <td>{genre}</td>
      <td>{isbn}</td>
      <td>{copies}</td>
      <td>{available.toString()}</td>
      <td>
        <EditBookDialog data={data} />
      </td>
      <td>
        <DeleteBook data={data} />
      </td>
      <td>
        <BorrowBook data={data} />
      </td>
    </tr>
  );
};

export default BookRow;

import type { Borrow } from "@/types/borrow.types";

const BorrowRow = ({ data, index }: { data: Borrow; index: number }) => {
  const { totalQuantity, book } = data;
  return (
    <tr className="hover:bg-base-300">
      <th>{index + 1}</th>
      <td>{book.title}</td>
      <td>{book.isbn}</td>
      <td>{totalQuantity}</td>
    </tr>
  );
};

export default BorrowRow;

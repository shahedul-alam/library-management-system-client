import type { Borrow } from "@/types/borrow.types";
import BorrowRow from "./BorrowRow";

const BorrowTable = ({ data }: { data: Borrow[] }) => {
  return (
    <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 my-12">
      <table className="table">
        <thead>
          <tr>
            <th></th>
            <th>Title</th>
            <th>ISBN</th>
            <th>Total Quantity</th>
          </tr>
        </thead>
        <tbody>
          {data.map((book, index) => (
            <BorrowRow key={index} data={book} index={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BorrowTable;

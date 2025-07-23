import { HandHelping, Pencil, Trash2 } from "lucide-react";

const BookRow = ({ data, index }) => {
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
        <button className="btn btn-square">
          <Pencil />
        </button>
      </td>
      <td>
        <button className="btn btn-square">
          <Trash2 />
        </button>
      </td>
      <td>
        <button className="btn btn-square">
          <HandHelping />
        </button>
      </td>
    </tr>
  );
};

export default BookRow;

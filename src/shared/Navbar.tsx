import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="bg-base-300 shadow-sm">
      <div className="container mx-auto navbar">
        <div className="flex-1">
          <Link className="btn btn-ghost text-xl font-bold" to={"/"}>
            LMS
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to={"/"}>All Books</Link>
            </li>
            <li>
              <Link to={"/add-book"}>Add Book</Link>
            </li>
            <li>
              <Link to={"/borrow-summary"}>Borrow Summary</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

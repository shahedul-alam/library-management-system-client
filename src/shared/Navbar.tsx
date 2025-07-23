const Navbar = () => {
  return (
    <nav className="bg-base-300 shadow-sm">
      <div className="container mx-auto navbar">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl font-bold">LMS</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>All Books</a>
            </li>
            <li>
              <a>Add Book</a>
            </li>
            <li>
              <a>Borrow Summary</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import AllBooks from "../pages/AllBooks";
import BorrowSummary from "../pages/BorrowSummary";
import AddBooks from "../pages/AddBooks";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: AllBooks },
      { path: "add-book", Component: AddBooks },
      { path: "borrow-summary", Component: BorrowSummary },
    ],
  },
]);

export default router;

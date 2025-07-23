import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    // children: [
    //   { index: true, comp}
    // ],
  },
]);

export default router;

import { configureStore } from "@reduxjs/toolkit";
import { bookApi } from "./apis/bookApi";
import { borrowApi } from "./apis/borrowApi";

export const store = configureStore({
  reducer: {
    [bookApi.reducerPath]: bookApi.reducer,
    [borrowApi.reducerPath]: borrowApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(bookApi.middleware)
      .concat(borrowApi.middleware),
});

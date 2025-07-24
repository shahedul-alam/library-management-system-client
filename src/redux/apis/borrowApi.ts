import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const borrowApi = createApi({
  reducerPath: "borrowApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api",
  }),
  tagTypes: ["borrow"],
  endpoints: (builder) => ({
    getAllBorrows: builder.query({
      query: () => "/borrow",
      providesTags: ["borrow"],
    }),
    borrowBook: builder.mutation({
      query: (borrowData) => ({
        url: "/borrow",
        method: "POST",
        body: borrowData,
      }),
      invalidatesTags: ["borrow"],
    }),
  }),
});

export const { useGetAllBorrowsQuery, useBorrowBookMutation } = borrowApi;

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const majorsApi = createApi({
  reducerPath: "majorsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3032",
  }),

  endpoints: (builder) => ({
    getMajorsList: builder.query({
      query: () => "majorsList",
      providesTags: ["majorsList"],
    }),
  }),
});
export const {useGetMajorsListQuery} = majorsApi;

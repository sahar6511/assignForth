import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const corsesApi = createApi({
  reducerPath: "corsesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3033",
  }),

  endpoints: (builder) => ({
    getCorsesList: builder.query({
      query: () => "corsesList",
      providesTags: ["corsesList"],
    }),

    //--------------------------------
    deleteCourse: builder.mutation({
      query: (id) => ({
        url: `corsesList/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["corsesList"],
    }),
    //---------------------------------
    addCourse: builder.mutation({
      query: (newCourse) => ({
        url: "corsesList",
        method: "POST",
        body: newCourse,
      }),
      invalidatesTags: ["corsesList"],
    }),
  }),
});
export const {
  useGetCorsesListQuery,
  useDeleteCourseMutation,
  useAddCourseMutation,
} = corsesApi;

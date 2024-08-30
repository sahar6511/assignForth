import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const courseSelectionApi = createApi({
  reducerPath: "courseSelectionApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3034",
  }),

  endpoints:(builder) => ({
    //-----------------------------------
    getSelctedCourse: builder.query({
      query: () => `courseSelection`,
      providesTags: ["studentsList"],
    }),
    //-----------------------------------
    addCourseSelection: builder.mutation({
      query: (newCourseSelection) => ({
        url: "courseSelection",
        method: "POST",
        body: newCourseSelection,
      }),
      invalidatesTags: ["courseSelection"],
    }),
    //-------------------------------------
   
  }),
});


export const {useGetSelctedCourseQuery,useAddCourseSelectionMutation} = courseSelectionApi;
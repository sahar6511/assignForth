import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const studentsApi = createApi({
  reducerPath: "studentsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3030",
  }),

  endpoints:(builder) => ({
    getStudentsList: builder.query({
      query: () => "studentsList",
      providesTags: ["studentsList"],
    }),
    //-----------------------------------
    getStudentById: builder.query({
      query: (id) => `studentsList/${id}`,
    }),
    // -----------------------------------
    addStudent: builder.mutation({
      query: (newStudent) => ({
        url: "studentsList",
        method: "POST",
        body: newStudent,
      }),
      invalidatesTags: ["studentsList"],
    }),
    //-------------------------------------
    deleteStudent:builder.mutation({
        query:(id)=>({
          url:`studentsList/${id}`,
          method:"DELETE"
        }),
        invalidatesTags: ["studentsList"],
    }),
  }),
});


export const {useGetStudentsListQuery,useGetStudentByIdQuery,useAddStudentMutation,useDeleteStudentMutation} = studentsApi;
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const teachersApi = createApi({
  reducerPath: "teachersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3031",
  }),

  endpoints: (builder) => ({
    getTeachersList: builder.query({
      query: () => "teachersList",
      providesTags: ["teachersList"],
    }),
    //--------------------------------------
    getTeacherById: builder.query({
      query: (id) => `teachersList/${id}`,
    }),
    //-----------------------------------
    addTeacher: builder.mutation({
      query: (newTeacher) => ({
        url: "teachersList",
        method: "POST",
        body: newTeacher,
      }),
      invalidatesTags: ["teachersList"],
    }),
    // -------------------------------------
    deleteTeacher: builder.mutation({
      query: (id) => ({
        url: `teachersList/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["teachersList"],
    }),    
  }),
});

export const {useGetTeachersListQuery,useGetTeacherByIdQuery,useAddTeacherMutation,useDeleteTeacherMutation} = teachersApi;

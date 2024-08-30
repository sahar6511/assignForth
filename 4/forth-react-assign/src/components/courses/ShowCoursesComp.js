import React from "react";
import {
  useGetCorsesListQuery,
  useDeleteCourseMutation,
} from "../../redux/services/coursesApi";


const ShowCoursesComp = () => {
  
  const { data: coursesList, error, isLoading } = useGetCorsesListQuery();
  const [deleteCourse, { isLoading: isDeletingCourse }] =
    useDeleteCourseMutation();
  

  const handleDeleteCourse = async (id) => {
    await deleteCourse(id);
  };

  return (
    <div className="table-container">
      {error ? (
        <p>error...</p>
      ) : isLoading ? (
        <p>isLoding...</p>
      ) : coursesList ? (
        <div>
          <table>
            <thead>
              <tr>
                <th>کد درس</th>
                <th>نام درس</th>
                <th>تعداد واحد </th>
                <th>نام مدرس </th>
                <th> حذف کردن</th>
              </tr>
            </thead>
            <tbody>
              {coursesList.map((course) => (
                <tr key={course.id}>
                  <td>{course.id}</td>
                  <td>{course.courseName}</td>
                  <td>{course.vahed}</td>
                  <td>{course.teacherFamily}</td>
                  <td>
                    <button
                      onClick={() => handleDeleteCourse(course.id)}
                      disabled={isDeletingCourse}
                    >
                      {" "}
                      حذف کردن
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : null}
    </div>
  );
};

export default ShowCoursesComp;


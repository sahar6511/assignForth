import React, { useState } from "react";
import { useGetStudentByIdQuery } from "../../redux/services/studentsApi";
import "../../style/sass/main.scss";

import { useGetCorsesListQuery } from "../../redux/services/coursesApi";
import { useAddCourseSelectionMutation } from "../../redux/services/courseSelectionApi";

const CorseSelectionComp = () => {
  const [id, setId] = useState("");
  const handleSearchStudentById = (event) => {
    setId(event.target.value);
  };

  const { data: coursesList, error1, isLoading1 } = useGetCorsesListQuery();
  const [addCourseSelection, { isLoading: isAddingCourseSelection }] =
    useAddCourseSelectionMutation();

  const handleClickAddCourse = async (courseId, courseName, vahed) => {
    await addCourseSelection({
      id: id,
      studentId: id,
      courseID: courseId,
      courseName: courseName,
      vahed: vahed,
    });
    alert("درس مورد نظر انتخاب گردید");
  };

  const { data, error, isLoading } = useGetStudentByIdQuery(id);
  return (
    <div style={{ display: "flex" }}>
      <div className="add-table">
        <h3>لطفا شماره دانشجویی را وارد کنید </h3>
        <input
          type="text"
          onChange={(event) => handleSearchStudentById(event)}
        />




        {error ? (
          <p className="mtb_10">دانشجویی با این شماره دانشجویی وجود ندارد</p>
        ) : isLoading ? (
          <p className="mtb_10">Loading...</p>
        ) : data ? (
          <div>
            <h4>
              نا و نام خانوادگی : {data.name} {data.family}{" "}
            </h4>
          </div>
        ) : null}
      </div>

      <div className="table-container">
        {error1 ? (
          <p>error1...</p>
        ) : isLoading1 ? (
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
                  <th> اتخاب درس </th>
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
                        onClick={() =>
                          handleClickAddCourse(
                            course.id,
                            course.courseName,
                            course.vahed
                          )
                        }
                        disabled={isAddingCourseSelection}
                      >
                        {" "}
                        انتخاب
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default CorseSelectionComp;

import React, { useState } from "react";
import { useGetStudentByIdQuery } from "../../redux/services/studentsApi";
import{useGetSelctedCourseQuery} from "../../redux/services/courseSelectionApi"
import "../../style/sass/main.scss";

const StudentsComp = () => {


  const [id, setId] = useState("");
  const handleSearchStudentById = (event) => {
    setId(event.target.value);
  };
  const { data, error, isLoading } = useGetStudentByIdQuery(id);


  const { data : selectedCourseData, error1, isLoading1 } = useGetSelctedCourseQuery();


  return (
    <div className="add-table">
      <h3>لطفا شماره دانشجویی را وارد کنید </h3>

      <input type="text" onChange={(event) => handleSearchStudentById(event)} />

      {error ? (
        <p className="mtb_10">دانشجویی با این شماره دانشجویی وجود ندارد</p>
      ) : isLoading ? (
        <p className="mtb_10">Loading...</p>
      ) : data ? (
        
        <div>
          <h4>شماره دانشجویی : {data.id}</h4>
          <h4>نام : {data.name}</h4>
          <h4>نام خانوادگی : {data.family}</h4>
          <h4>رشته تحصیلی : {data.major}</h4>
        </div>
        
      ) : null}


      {/* //----------------------- */}

      
      {error1 ? (
        <p className="mtb_10">error happan... </p>
      ) : isLoading1 ? (
        <p className="mtb_10">Loading...</p>
      ) : selectedCourseData ? (
    
        <div className="table-container w-100">
          <table className="selected-course-tb">
            <thead>
              <tr>
                <th>کد درس</th>
                <th>درس انتخاب شده</th>
                <th>تعداد واحد</th>
              </tr>
            </thead>
            <tbody>
              {
                selectedCourseData.map((currentItem)=>
                 ( currentItem.studentId	=== id &&
                  <tr>
                    <td>{currentItem.courseID}</td>
                    <td>{currentItem.courseName}</td>
                    <td>{currentItem.vahed}</td>
                  </tr>
                    
                 )
                )
              }
            </tbody>
          </table>
        </div>
      ) : null}



    </div>
  );
};

export default StudentsComp;

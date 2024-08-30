import React from "react";
import customStore from "./redux/store";
import { Provider } from "react-redux";
import StudentsComp from "./components/students/StudentsComp";
import AddStudentComp from "./components/students/AddStudentComp";
import AllStudentsComp from "./components/students/AllStudentsComp";
import TeachersComp from "./components/teachers/TeachersComp";
import AddTeacherComp from "./components/teachers/AddTeacherCopm";
import AllTeachersComp from "./components/teachers/AllTeachersComp";
import AdminComp from "./components/admin/AdminComp";
import CorsesComp from "./components/courses/CoursesComp";
import AddCourseComp from "./components/courses/AddCourseComp";
import ShowCoursesComp from "./components/courses/ShowCoursesComp";
import CorseSelectionComp from "./components/courses/CorseSelectionComp"
import { Link, Route, Routes } from "react-router-dom";
import "./style/sass/main.scss";

const App = () => {
  return (
    <Provider store={customStore}>
      <ul className="pannels-container">
        <li>
          <Link to="AdminComp">پنل ادمین</Link>
        </li>
        <li>
          <Link to="TeachersComp">پنل اساتید</Link>
        </li>
        <li>
          <Link to="StudentsComp">پنل دانشجویان</Link>
        </li>
        <li>
          <Link to="CorsesComp">پنل دروس</Link>
        </li>
        <li>
          <Link to="CorseSelectionComp">پنل انتخاب واحد</Link>
        </li>
      </ul>
      <Routes>
        <Route exact path="/"></Route>
        <Route path="/AdminComp" element={<AdminComp />}>
          <Route path="AddStudentComp"  element={<AddStudentComp />}></Route>
          <Route path="AddTeacherComp"  element={<AddTeacherComp />}></Route>
          <Route path="AllTeachersComp" element={<AllTeachersComp />}></Route>
          <Route path="AllStudentsComp" element={<AllStudentsComp />}></Route>
        </Route>
        <Route path="/TeachersComp/*" element={<TeachersComp />}></Route>
        <Route path="/StudentsComp" element={<StudentsComp />}></Route>
        <Route path="/CorsesComp" element={<CorsesComp />}>
          <Route path="ShowCoursesComp" element={<ShowCoursesComp />}></Route>
          <Route path="AddCourseComp" element={<AddCourseComp />}></Route>
        </Route>
        <Route path="/CorseSelectionComp" element={<CorseSelectionComp />}></Route>
      </Routes>
    </Provider>
  );
};

export default App;

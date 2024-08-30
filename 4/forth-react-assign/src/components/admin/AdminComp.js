import React from "react";
import { Link, Outlet } from "react-router-dom";
import "../../style/sass/main.scss";

const AdminComp = () => {
  return (
    <div className="center-container">
      <ul className="menu-container">
        <li>
          <Link to="AllTeachersComp">نمایش اطلاعات اساتید  </Link>
        </li>
        <li>
          <Link to="AllStudentsComp">نمایش اطلاعات دانشجویان </Link>
        </li>
        <li>
          <Link to="AddTeacherComp">اضافه کردن استاد</Link>
        </li>
        <li>
          <Link to="AddStudentComp">اضافه کردن دانشجو</Link>
        </li>
      </ul>
      {<Outlet />}
    </div>
  );
};

export default AdminComp;

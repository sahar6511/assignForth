import React from "react";
import { Link, Outlet } from "react-router-dom";
import "../../style/sass/main.scss";

const CorsesComp = () => {
  return (

      <div className="center-container">
        <ul className="menu-container">
          <li>
            <Link to="ShowCoursesComp">نمایش اطلاعات دروس </Link>
          </li>
          <li>
            <Link to="AddCourseComp"> اضافه کردن درس </Link>
          </li>
        </ul>
        {<Outlet />}
      </div>

  );
};

export default CorsesComp;

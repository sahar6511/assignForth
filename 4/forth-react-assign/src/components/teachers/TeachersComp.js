import React, { useState } from "react";
import { useGetTeacherByIdQuery } from "../../redux/services/teachersApi";
import "../../style/sass/main.scss";

const TeachersComp = () => {
  const [id, setId] = useState("");
  const handleSearchTeacherById = (event) => {
    setId(event.target.value);
  };
  const { data, error, isLoading } = useGetTeacherByIdQuery(id);
  return (
    <div className="add-table">
      <h3>لطفا شماره پرسنلی را وارد کنید </h3>

      <input type="text" onChange={(event) => handleSearchTeacherById(event)} />

      {error ? (
        <p className="mtb_10">استادی با این شماره پرسنلی وجود ندارد</p>
      ) : isLoading ? (
        <p className="mtb_10">Loading...</p>
      ) : data ? (
        <div>
          <h4>شماره پرسنلی : {data.id}</h4>
          <h4>نام : {data.name}</h4>
          <h4>نام خانوادگی : {data.family}</h4>
          <h4> درس قابل توسط استاد : {data.course}</h4>
          
        </div>
      ) : null}
    </div>
  );
};

export default TeachersComp;

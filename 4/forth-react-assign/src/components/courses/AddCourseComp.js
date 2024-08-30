// import React from "react";
// import { useGetTeachersListQuery } from "../../redux/services/teachersApi";
// import { useAddCourseMutation } from "../../redux/services/coursesApi";
// const AddCourseComp = () => {

//   const { data: teachersList, error, isLoading } = useGetTeachersListQuery();
//     const [addCourse, { isLoading: isAddingCourse }] = useAddCourseMutation();

//     const handelAddCourse = async (event) => {
//       event.preventDefault();
//       const myForm = new FormData(event.target);
//       const id = myForm.get("id");
//       const courseName = myForm.get("courseName");
//       const vahed = myForm.get("vahed");
//       const teacherFamily = myForm.get("teacherFamily");
//       await addCourse({
//         id: id,
//         courseName: courseName,
//         vahed: vahed,
//         teacherFamily: teacherFamily,
//       });
//       alert("عملیات اضافه کردن درس با موفقیت انجام شد");
//       event.target.reset();
//     };
//   if (isLoading) {
//     return <div>Loading....</div>;
//   }
//   if (error) {
//     return <div>error:{error.message}</div>;
//   }
//   return (
//     <div className="add-table">
//             <form action="" onSubmit={(event) => handelAddCourse(event)}>
//               <table>
//                 <tbody>
//                   <tr>
//                     <td>کد درس</td>
//                     <td>
//                       <input type="text" name="id" />
//                     </td>
//                   </tr>
//                   <tr>
//                     <td>نام درس</td>
//                     <td>
//                       <input type="text" name="courseName" />
//                     </td>
//                   </tr>
//                   <tr>
//                     <td>تعداد واحد </td>
//                     <td>
//                       <input type="text" name="vahed" />
//                     </td>
//                   </tr>
//                   <tr>
//                     <td>نام مدرس</td>

//                     <td>
//                       <select name="teacherFamily">
//                         {teachersList.map((teacher) => (
//                           <option>{teacher.family}</option>
//                         ))}
//                       </select> 
//                     </td>
//                    </tr> 
//                  <tr>
//                     <td colSpan="2">
//                       <button type="submit" disabled={isAddingCourse}>
//                         اضافه کردن
//                       </button>
//                     </td>
//                   </tr>
//                 </tbody>
//               </table> 
//             </form> 
//           </div>
//   );
// };

// export default AddCourseComp;





import React, { useState, useEffect } from "react";
import { useGetTeachersListQuery } from "../../redux/services/teachersApi";
import { useAddCourseMutation } from "../../redux/services/coursesApi";
import { validate } from "./validate";
import "../../style/sass/main.scss"
const AddCourseComp = () => {
  const { data: teachersList, error, isLoading } = useGetTeachersListQuery();
  const [addCourse, { isLoading: isAddingCourse }] = useAddCourseMutation();
  const [data, setData] = useState({
    id: "",
    courseName: "",
    vahed: "",
    teacherFamily: "طاهری",
  });
  const [myError, setmyError] = useState({});

    const handleChangeInpute =(event)=>{
      setData({...data,[event.target.name]:event.target.value})
    }
    const handleClickSelect =(event)=>{
      console.log(event.target.value)
      setData({...data,[event.target.name]:event.target.value})
    }
    useEffect(() => {setmyError(validate(data))},[data]);



  const handelAddCourse = async (event) => {
    event.preventDefault();

    if(!Object.keys(myError).length)
    {
      console.log(data)
      await addCourse(data);
      alert("عملیات اضافه کردن درس با موفقیت انجام شد");
    }
  };

  if (isLoading) {
    return <div>Loading....</div>;
  }
  if (error) {
    return <div>error:{error.message}</div>;
  }
  return (
    <div className="add-table">
      <form action="" noValidate onSubmit={handelAddCourse}>
        <table>
          <tbody>
            <tr>
              <td>کد درس</td>
              <td>
                <input type="text" name="id"  value={data.id} onChange={handleChangeInpute}/>
                <span className="red-color">{myError.id &&<p>{myError.id}</p>}</span>
              </td>
            </tr>
            <tr>
              <td>نام درس</td>
              <td>
                <input type="text" name="courseName" value={data.name} onChange={handleChangeInpute}/>
                <span className="red-color">{myError.courseName &&<p>{myError.courseName}</p>}</span>
              </td>
            </tr>
            <tr>
              <td>تعداد واحد </td>
              <td>
                <input  type="text" name="vahed" value={data.vahed} onChange={handleChangeInpute} />
                <span className="red-color">{myError.vahed &&<p>{myError.vahed}</p>}</span>
              </td>
            </tr>
            <tr>
              <td>نام مدرس</td>

              <td>
                <select name="teacherFamily" onChange={handleClickSelect}>
                  {teachersList.map((teacher) => (
                    <option value={teacher.family}>{teacher.family}</option>
                  ))}
                </select>
                <span className="red-color">{myError.teacherFamily &&<p>{myError.teacherFamily}</p>}</span>
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <button type="submit" disabled={isAddingCourse} >
                  اضافه کردن
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default AddCourseComp;

import { useAddTeacherMutation } from "../../redux/services/teachersApi";
import {useGetCorsesListQuery} from "../../redux/services/coursesApi"
import "../../style/sass/main.scss";

const AddTeacherComp = () => {
  const {data : coursesList,error,isLoading} = useGetCorsesListQuery();
  const [addTeacher, { isLoading: isAddingTeacher }] = useAddTeacherMutation();

  const handelAddTeacher = async (event) => {
    event.preventDefault();
    const myForm = new FormData(event.target);
    const Name = myForm.get("name");
    const Family = myForm.get("family");
    const Course = myForm.get("course");
    
    await addTeacher({
      name: Name,
      family: Family,
      course:Course
    });
    alert("عملیات اضافه کردن استاد با موفقیت انجام شد");
    event.target.reset();
  };
  if (isLoading) {
    return <div>Loading....</div>;
  }
  if (error) {
    return <div>error:{error.message}</div>;
  }
  return (
    <div className="add-table">
      <form action="" onSubmit={(event) => handelAddTeacher(event)}>
        <table>
          <tdead>
            <tr></tr>
          </tdead>
          <tbody>
            <tr>
              <td>نام</td>
              <td>
                <input type="text" name="name" />
              </td>
            </tr>
            <tr>
              <td>نام خانوادگی</td>
              <td>
                <input type="text" name="family" />
              </td>
            </tr>
            <tr>
              
            <td>درس قابل تدریس</td>
              <td>
                <select name="course">
                  {
                    coursesList.map((currentItem)=>

                      <option>{currentItem.courseName}</option>
                    )
                  }
  
                </select>
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <button type="submit" disabled={isAddingTeacher}>
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

export default AddTeacherComp;

import { useAddStudentMutation } from "../../redux/services/studentsApi";
import {useGetMajorsListQuery} from "../../redux/services/majorsApi"
import "../../style/sass/main.scss";

const AddStudentComp = () => {
  const {data : majorsList,error,isLoading} = useGetMajorsListQuery();
  const [addStudent, { isLoading: isAddingstudent }] = useAddStudentMutation();

  const handelAddStudent = async (event) => {
    event.preventDefault();
    const myForm = new FormData(event.target);
    const stuName = myForm.get("name");
    const stuFamily = myForm.get("family");
    const stuMajor = myForm.get("major");
    await addStudent({
      name: stuName,
      family: stuFamily,
      major: stuMajor,
    });
    alert("عملیات اضافه کردن دانشجو با موفقیت انجام شد");
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
      <form action="" onSubmit={(event) => handelAddStudent(event)}>
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
              <td>رشته تصیلی</td>

              <td>
                <select name="major">
                  {
                    majorsList.map((currentItem)=>

                      <option>{currentItem.major}</option>
                    )
                  }
  
                </select>
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <button type="submit" disabled={isAddingstudent}>
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

export default AddStudentComp;

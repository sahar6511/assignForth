import {
  useGetStudentsListQuery,
  useDeleteStudentMutation,
} from "../../redux/services/studentsApi";
import "../../style/sass/main.scss";

const AllStudentsComp = () => {
  const { data: studentsList, error, isLoading } = useGetStudentsListQuery();
  const [deleteStudent, { isLoading: isDeletingStudent }] =
    useDeleteStudentMutation();

  const handleDeleteStudent = async (id) => {
    await deleteStudent(id);
  };

  if (isLoading) {
    return <div>Loading....</div>;
  }
  if (error) {
    return <div>error:{error.message}</div>;
  }
  return (


      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>شماره دانشجویی</th>
              <th>نام</th>
              <th>نم خانوادگی</th>
              <th>رشته تحصیلی</th>
              <th> حذف کردن</th>
            </tr>
          </thead>
          <tbody>
            {studentsList.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.family}</td>
                <td>{student.major}</td>
                <td>
                  <button
                    onClick={() => handleDeleteStudent(student.id)}
                    disabled={isDeletingStudent}
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
  );
};

export default AllStudentsComp;

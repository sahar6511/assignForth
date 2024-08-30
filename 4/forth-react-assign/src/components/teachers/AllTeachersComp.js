import {
    useGetTeachersListQuery,
    useDeleteTeacherMutation,
  } from "../../redux/services/teachersApi";
  import "../../style/sass/main.scss";
  
  const AllTeachersComp = () => {
    const { data: TeachersList, error, isLoading } = useGetTeachersListQuery();
    const [deleteTeacher, { isLoading: isDeletingTeacher }] =
      useDeleteTeacherMutation();
  
    const handleDeleteTeacher = async (id) => {
      await deleteTeacher(id);
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
                <th> کد پرسنلی</th>
                <th>نام</th>
                <th>نام خانوادگی</th>
                <th> حذف کردن</th>
              </tr>
            </thead>
            <tbody>
              {TeachersList.map((Teacher) => (
                <tr key={Teacher.id}>
                  <td>{Teacher.id}</td>
                  <td>{Teacher.name}</td>
                  <td>{Teacher.family}</td>
                  <td>
                    <button
                      onClick={() => handleDeleteTeacher(Teacher.id)}
                      disabled={isDeletingTeacher}
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
      // </div>
    );
  };
  
  export default AllTeachersComp;
  
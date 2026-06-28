import { useNavigate } from "react-router-dom";
import UserForm from "../components/UserForm";
import { addUser } from "../api/userApi";

function AddUser() {
  const navigate = useNavigate();

  const handleAdd = async (data) => {
    try {
      await addUser(data);

      alert("User Added Successfully");

      navigate("/");
    } catch (err) {
      alert("Error adding user");
    }
  };

  return (
    <UserForm
      buttonText="Add User"
      onSubmit={handleAdd}
    />
  );
}

export default AddUser;
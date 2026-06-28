import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import UserForm from "../components/UserForm";
import { getUser, updateUser } from "../api/userApi";

function EditUser() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [user, setUser] = useState(null);

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const response = await getUser(id);

    const names = response.data.name.split(" ");

    setUser({
      firstName: names[0],
      lastName: names.slice(1).join(" "),
      email: response.data.email,
      department: "IT",
    });
  };

  const handleUpdate = async (data) => {
    await updateUser(id, data);

    alert("User Updated Successfully");

    navigate("/");
  };

  if (!user) {
    return <h2>Loading...</h2>;
  }

  return (
    <UserForm
      initialData={user}
      buttonText="Update User"
      onSubmit={handleUpdate}
    />
  );
}

export default EditUser;
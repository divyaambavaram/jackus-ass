import { Link } from "react-router-dom";

function UserTable({ users, onDelete }) {
  return (
    <table
      border="1"
      cellPadding="10"
      width="100%"
      style={{
        borderCollapse: "collapse",
        marginTop: "20px",
      }}
    >
      <thead>
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Department</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.email}</td>
            <td>{user.department}</td>

            <td>
              <Link to={`/edit/${user.id}`}>
                <button
                  style={{
                    padding: "5px 10px",
                    cursor: "pointer",
                  }}
                >
                  Edit
                </button>
              </Link>

              <button
                onClick={() => onDelete(user.id)}
                style={{
                  marginLeft: "10px",
                  background: "red",
                  color: "white",
                  padding: "5px 10px",
                  cursor: "pointer",
                }}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default UserTable;
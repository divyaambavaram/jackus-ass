import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        background: "#1976d2",
        color: "white",
        padding: "15px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <h2>User Dashboard</h2>

      <Link
        to="/add"
        style={{
          color: "white",
          textDecoration: "none",
          background: "green",
          padding: "8px 15px",
          borderRadius: "5px",
        }}
      >
        Add User
      </Link>
    </nav>
  );
}

export default Navbar;
import { useEffect, useState } from "react";
import { getUsers } from "../api/userApi";

import Navbar from "../components/Navbar";
import UserTable from "../components/UserTable";
import SearchBar from "../components/SearchBar";
import FilterPopup from "../components/FilterPopup";
import Pagination from "../components/Pagination";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";

import { filterUsers } from "../utils/filterUsers";
import { paginate } from "../utils/pagination";

function Dashboard() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [search, setSearch] = useState("");

  const [showFilter, setShowFilter] = useState(false);

  const [filters, setFilters] = useState({
    firstName: "",
    lastName: "",
    email: "",
    department: "",
  });

  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);

      const response = await getUsers();

      const formattedUsers = response.data.map((user) => {
        const names = user.name.split(" ");

        return {
          id: user.id,
          firstName: names[0],
          lastName: names.slice(1).join(" "),
          email: user.email,
          department: "IT",
        };
      });

      const demoUsers = [];

      for (let i = 0; i < 10; i++) {
        formattedUsers.forEach((user) => {
          demoUsers.push({
            ...user,
            id: user.id + i * 10,
          });
        });
      }

      setUsers(demoUsers);
    } catch (err) {
      setError("Failed to fetch users.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = (id) => {
    if (!window.confirm("Delete this user?")) return;

    setUsers((prev) =>
      prev.filter((user) => user.id !== id)
    );
  };

  const filteredUsers = filterUsers(users, search, filters);

  const paginatedUsers = paginate(
    filteredUsers,
    currentPage,
    rowsPerPage
  );

  return (
    <div>
      <Navbar />

      <div
        style={{
          width: "95%",
          margin: "20px auto",
        }}
      >
        <h2>User Management Dashboard</h2>

        {loading && <Loader />}

        {error && <ErrorMessage message={error} />}

        {!loading && !error && (
          <>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "20px",
              }}
            >
              <SearchBar
                search={search}
                setSearch={setSearch}
              />

              <button
                onClick={() => setShowFilter(true)}
              >
                Filter
              </button>
            </div>

            <FilterPopup
              showFilter={showFilter}
              setShowFilter={setShowFilter}
              filters={filters}
              setFilters={setFilters}
            />

            <UserTable
              users={paginatedUsers}
              onDelete={handleDelete}
            />

            <Pagination
              totalUsers={filteredUsers.length}
              currentPage={currentPage}
              rowsPerPage={rowsPerPage}
              setCurrentPage={setCurrentPage}
              setRowsPerPage={setRowsPerPage}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
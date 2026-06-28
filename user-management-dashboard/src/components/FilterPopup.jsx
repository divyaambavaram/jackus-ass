import { useState, useEffect } from "react";

function FilterPopup({
  showFilter,
  setShowFilter,
  filters,
  setFilters,
}) {
  const [localFilters, setLocalFilters] = useState(filters);

  useEffect(() => {
    setLocalFilters(filters);
  }, [filters]);

  if (!showFilter) return null;

  const handleChange = (e) => {
    setLocalFilters({
      ...localFilters,
      [e.target.name]: e.target.value,
    });
  };

  const apply = () => {
    setFilters(localFilters);
    setShowFilter(false);
  };

  const reset = () => {
    const empty = {
      firstName: "",
      lastName: "",
      email: "",
      department: "",
    };

    setLocalFilters(empty);
    setFilters(empty);
  };

  return (
    <div
      style={{
        position: "fixed",
        top: "15%",
        left: "50%",
        transform: "translateX(-50%)",
        width: "350px",
        background: "#fff",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        boxShadow: "0 0 15px rgba(0,0,0,.2)",
      }}
    >
      <h3>Filter Users</h3>

      <input
        name="firstName"
        placeholder="First Name"
        value={localFilters.firstName}
        onChange={handleChange}
      />

      <br />
      <br />

      <input
        name="lastName"
        placeholder="Last Name"
        value={localFilters.lastName}
        onChange={handleChange}
      />

      <br />
      <br />

      <input
        name="email"
        placeholder="Email"
        value={localFilters.email}
        onChange={handleChange}
      />

      <br />
      <br />

      <select
        name="department"
        value={localFilters.department}
        onChange={handleChange}
      >
        <option value="">All Departments</option>
        <option value="IT">IT</option>
        <option value="HR">HR</option>
        <option value="Finance">Finance</option>
        <option value="Sales">Sales</option>
      </select>

      <br />
      <br />

      <button onClick={apply}>Apply</button>

      <button
        style={{ marginLeft: "10px" }}
        onClick={reset}
      >
        Reset
      </button>

      <button
        style={{ marginLeft: "10px" }}
        onClick={() => setShowFilter(false)}
      >
        Close
      </button>
    </div>
  );
}

export default FilterPopup;
function SearchBar({ search, setSearch }) {
  return (
    <div style={{ margin: "20px 0" }}>
      <input
        type="text"
        placeholder="Search by name, email or department..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "300px",
          padding: "10px",
          fontSize: "16px",
        }}
      />
    </div>
  );
}

export default SearchBar;
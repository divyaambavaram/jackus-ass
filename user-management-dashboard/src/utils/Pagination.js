export const paginate = (users, currentPage, rowsPerPage) => {
  const start = (currentPage - 1) * rowsPerPage;
  const end = start + rowsPerPage;

  return users.slice(start, end);
};
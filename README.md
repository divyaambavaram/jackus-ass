# User Management Dashboard

## Project Overview

This is a React-based User Management Dashboard that allows users to view, add, edit, delete, search, filter, and paginate user records using the JSONPlaceholder REST API.

## Features

- View all users
- Add a new user
- Edit existing user details
- Delete users
- Search users by first name, last name, email, or department
- Filter users using a popup
- Pagination (10, 25, 50, 100 records per page)
- Responsive user interface
- Loading and error handling

## Technologies Used

- React.js
- React Router DOM
- Axios
- Vite
- JSONPlaceholder API

## API Used

https://jsonplaceholder.typicode.com/users

## Project Structure

```
src/
│
├── api/
├── components/
├── pages/
├── utils/
├── App.jsx
├── main.jsx
└── index.css
```

## Installation

Clone the repository

```bash
git clone <repository-url>
```

Navigate to the project folder

```bash
cd user-management-dashboard
```

Install dependencies

```bash
npm install
```

Run the project

```bash
npm run dev
```

Open your browser and visit

```
http://localhost:5173
```

## Assumptions

- JSONPlaceholder simulates Create, Update, and Delete operations but does not permanently save changes.
- Department values are used as sample data for demonstration purposes.

## Future Improvements

- Persist data using a real backend/database
- Add authentication
- Improve UI using Tailwind CSS or Material UI
- Add unit tests
- Implement server-side pagination and filtering

## Author

Divya Bharathi Ambavaram

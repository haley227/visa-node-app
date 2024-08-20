# Library Management System

This is a full-stack web application for managing a library of books. It consists of a React frontend and a Node.js backend.

## Table of Contents

- [Library Management System](#library-management-system)
  - [Table of Contents](#table-of-contents)
    - [Frontend](#frontend)
    - [Backend](#backend)
  - [Running the app](#running-the-app)
    - [Clone the repository](#clone-the-repository)
    - [Install Backend Dependencies](#install-backend-dependencies)
    - [Install Frontend Dependencies](#install-frontend-dependencies)
- [Start dev server](#start-dev-server)
- [Start the app](#start-the-app)
- [Accessing the Application](#accessing-the-application)
- [API Endpoints](#api-endpoints)

### Frontend

- **React** - JavaScript library for building user interfaces
- **React Router** - For routing within the application
- **Styled Components** - For styling components

### Backend

- **Node.js** - JavaScript runtime for building the backend
- **Express** - Web framework for Node.js

## Running the app

### Clone the repository
```git clone https://github.com/haley227/visa-node-app.git```
```cd visa-node-app```

### Install Backend Dependencies
```cd book-api```
```npm install```

### Install Frontend Dependencies
```cd ../visa-app-client```
```npm install```

# Start dev server
```cd ../book-api``` <br />
```npm run dev```
The backend server will start on http://localhost:3001.

# Start the app
In another terminal, run the following commands
```cd ../visa-app-client```
```npm run start```
The frontend will start on http://localhost:3000.

# Accessing the Application
Open your browser and navigate to http://localhost:3000 to access the library management app.

# API Endpoints
Here are some of the main API endpoints:

GET /api/books - Get a list of all books

POST /api/books - Add a new book

GET /api/books/

- Get details of a specific book

PUT /api/books/

- Update a book's details

DELETE /api/books/

- Delete a book

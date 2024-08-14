
# Library Management System

This is a full-stack web application for managing a library of books. It consists of a React frontend and a Node.js backend.

## Table of Contents

- [Library Management System](#library-management-system)
  - [Table of Contents](#table-of-contents)
  - [Running the app](#running-the-app)
    - [Frontend](#frontend)
    - [Backend](#backend)
    - [Clone the repository](#clone-the-repository)

## Running the app

### Frontend
- **React** - JavaScript library for building user interfaces
- **React Router** - For routing within the application
- **CSS/SCSS** - For styling components

### Backend
- **Node.js** - JavaScript runtime for building the backend
- **Express** - Web framework for Node.js


### Clone the repository

```bash
git clone https://github.com/haleysmith/library-management-system.git
cd library-management-system
Install Backend Dependencies
bash
Copy code
cd backend
npm install
Install Frontend Dependencies
bash
Copy code
cd ../frontend
npm install
Configure Environment Variables
Create a .env file in the backend directory with the following variables:

env variables
PORT=3001

Clone repo
Copy code
cd book-api
npm start
The backend server will start on http://localhost:3001.

Running the Frontend

cd ../visa-app-client
npm start
The frontend will start on http://localhost:3000.

Accessing the Application
Open your browser and navigate to http://localhost:3000 to access the library management app.

API Endpoints
Here are some of the main API endpoints:

GET /api/books - Get a list of all books

POST /api/books - Add a new book

GET /api/books/
- Get details of a specific book

PUT /api/books/
- Update a book's details

DELETE /api/books/
- Delete a book

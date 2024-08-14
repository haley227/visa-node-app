import React from 'react';
import './App.css';
import { BookList } from './components/pages/BookList';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from './components/pages/Layout';
import { EditBook } from './components/pages/EditBook';
import { DeleteBook } from './components/pages/DeleteBook';

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api/books")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  const tempBookList = [{
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    yearPublished: 1925,
    genre: "Fiction",
  },
  {
    id: 2,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    yearPublished: 1960,
    genre: "Fiction",
  }
]

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<BookList books={tempBookList}/>} />
          <Route path="/edit/:id" element={<EditBook />} />
          <Route path="/delete/:id" element={<DeleteBook />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

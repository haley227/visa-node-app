import React from 'react';
import './App.css';
import { BookList } from './components/pages/BookList';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from './components/pages/Layout';
import { EditBook } from './components/pages/EditBook';
import { DeleteBook } from './components/pages/DeleteBook';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<BookList />} />
          <Route path="/edit/:id" element={<EditBook />} />
          <Route path="/delete/:id" element={<DeleteBook />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

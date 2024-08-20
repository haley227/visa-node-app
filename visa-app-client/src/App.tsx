import { BookList } from './components/pages/BookList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/pages/Layout';
import { EditBook } from './components/pages/EditBook';
import { DeleteBook } from './components/pages/DeleteBook';
import { AddBook } from './components/pages/AddBook';
import { PageNotFound } from './components/pages/PageNotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<BookList />} />
          <Route path="/add" element={<AddBook />} />
          <Route path="/edit/:id" element={<EditBook />} />
          <Route path="/delete/:id" element={<DeleteBook />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

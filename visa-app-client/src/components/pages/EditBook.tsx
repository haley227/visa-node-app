import { useParams } from 'react-router-dom';
import useBookList from 'utils/bookListContext/useBookList';
import { BookForm } from 'components/modules/BookForm';
import { PageNotFound } from './PageNotFound';

export const EditBook = () => {
  const { bookList, updateBook } = useBookList();

  const bookID = useParams().id;
  const book = bookList.find((book) => book.id === parseInt(bookID || ''));

  if (!book || !bookID) {
    return <PageNotFound />;
  }

  return <BookForm title={`Edit ${book.title}`} book={book} onSubmit={updateBook} />;
};

import useBookList from 'utils/bookListContext/useBookList';
import { BookForm } from 'components/modules/BookForm';

export const AddBook = () => {
  const { addBook } = useBookList();

  return <BookForm title={'Add New Book'} onSubmit={addBook} />;
};

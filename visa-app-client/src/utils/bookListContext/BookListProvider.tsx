/* eslint-disable react-hooks/exhaustive-deps */
import type { ReactNode } from 'react';
import React, {
  useCallback,
  useMemo,
  useEffect,
  useState,
  createContext,
} from 'react';

import type {
  Book,
  BookList,
  BookListUtils,
} from './types';

export const BookListContext = createContext<BookListUtils | undefined>(
  undefined,
);

export const BookListProvider = ({ children }: { children: ReactNode }) => {
  const [bookList, setBookList] = useState<BookList>([]);
  const baseEndpoint = `/api/books`;

  const getMaxID = useCallback(() => {
    console.log(bookList);

    return Math.max(...bookList.map(o => o.id || 0), 0);
  }, [bookList]);

  const updateBook = (options: Book) => {
    return fetch(`${baseEndpoint}/${options?.id}/`, {
      method: 'PUT',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...options,
      }),
    }).then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        fetchBooks();
    });
  };

  const removeBook = (bookId: string) => {
    return fetch(`/api/books/${bookId}`, { method: 'DELETE'})
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          console.log('Resource deleted successfully');
          fetchBooks();
        })
        .catch(error => {
          console.error('There was a problem with the DELETE request:', error.message);
        });
  };

  const addBook = (options: Book) => {
    return fetch(`${baseEndpoint}/`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: getMaxID() + 1,
        ...options,
      }),
    })
      .then(response => {
        console.log('res', response);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        console.log('Resource created successfully');
        fetchBooks();
      });
  };

  const fetchBooks = useCallback(() => {
    fetch("/api/books")
        .then((res) => res.json())
        .then((data) => setBookList(data));
  }, [setBookList, baseEndpoint]);

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  const bookListUtils = useMemo(() => {
    return {
      bookList,
      removeBook,
      updateBook,
      addBook,
    };
  }, [
      removeBook,
      updateBook,
      addBook,
  ]);

  return (
    <BookListContext.Provider value={bookListUtils}>
      {children}
    </BookListContext.Provider>
  );
};

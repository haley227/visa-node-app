import { Book, BookList } from "./book";

// In memory data store
let bookList: BookList = {
    1: {
      id: 1,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      yearPublished: 1925,
      genre: "Fiction",
    },
    2: {
      id: 2,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      yearPublished: 1960,
      genre: "Fiction",
    },
    3: {
        id: 3,
        title: "1984",
        author: "George Orwell",
        yearPublished: 1949,
        genre: "Dystopian Fiction",
    },
    4: {
        id: 4,
        title: "Pride and Prejudice",
        author: "Jane Austen",
        yearPublished: 1813,
        genre: "Romantic Fiction",
    },
    5: {
        id: 5,
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        yearPublished: 1951,
        genre: "Fiction",
    },
    6: {
        id: 6,
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        yearPublished: 1937,
        genre: "Fantasy",
    },
  };

export const findAll = async (): Promise<Book[]> => Object.values(bookList);

export const find = async (id: number): Promise<Book> => bookList[id];

export const create = async (newItem: Book): Promise<Book> => {
    const id = new Date().valueOf();
    bookList[id] = {
      ...newItem,
      id,
    };
    return bookList[id];
};

export const update = async (
    id: number,
    bookUpdate: Book
  ): Promise<Book | null> => {
    const book = await find(id);

    if (!book) {
      return null;
    }

    bookList[id] = {
      ...book,
      ...bookUpdate,
    };

    return bookList[id];
  };

export const remove = async (id: number): Promise<null | void> => {
    const book = await find(id);

    if (!book) {
      return null;
    }

    delete bookList[id];
  };
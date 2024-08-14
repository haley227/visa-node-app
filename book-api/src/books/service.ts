import { Book, Books } from "./book";

// In memory data store
let bookList: Books = {
    1: {
      id: 1,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      yearPublished: 1925,
        genre: "Fiction",
    },
  };

export const findAll = async (): Promise<Book[]> => Object.values(bookList);

export const find = async (id: number): Promise<Book> => bookList[id];

export const create = async (newItem: Book): Promise<Book> => {
    const id = new Date().valueOf();
    bookList[id] = {

      ...newItem,
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
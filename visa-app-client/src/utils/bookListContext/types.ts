export interface BookListUtils {
    bookList: BookList;
    removeBook: (bookId: string) => Promise<void>;
    updateBook: (options: Book) => Promise<void>;
    addBook: (options: Book) => Promise<void> | undefined;
}

export interface Book {
    id?: number;
    title: string;
    author: string;
    yearPublished: number;
    genre: string;
}

export type BookList = Book[];
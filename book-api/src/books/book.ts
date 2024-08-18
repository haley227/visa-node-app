// Define book types externally
export interface Book {
  id: number;
  title: string;
  author: string;
  yearPublished: number;
  genre: string;
}

export interface BookList {
  [key: number]: Book;
}
import React from "react";
import { BookCard, BookCardProps } from "../modules/BookCard";

export const BookList = ({ books }: {books: BookCardProps[] } ) => {
    return (
        <div className="bookList">
            {books.map((book) => (
                <BookCard {...book} />
            ))}
        </div>
    );
};
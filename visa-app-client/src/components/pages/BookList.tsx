import React, { useEffect, useState } from "react";
import { BookCard, BookCardProps } from "../modules/BookCard";

export const BookList = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
      fetch("/api/books")
        .then((res) => res.json())
        .then((data) => { setData(data); console.log(data); });
    }, []);

    return (
        <div className="bookList">
            {data.map((book: BookCardProps) =>
              <BookCard key={book.id} {...book} />
            )};
        </div>
    );
};
import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';

export const EditBook = () => {
    const bookID = useParams().id;
    const [data, setData] = useState({
        title: "",
    });

    useEffect(() => {
        fetch(`/api/books/${bookID}`)
          .then((res) => res.json())
          .then((data) => {
            setData(data)
        });
    }, [bookID]);

    return (
        <div>
            <h1>Edit Book</h1>
            <p>Book ID: {bookID}</p>
            {data && <p>{data.title}</p>}
        </div>
    );
};
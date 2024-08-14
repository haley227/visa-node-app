import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


export const DeleteBook = () => {
    const bookID = useParams().id;
    const [data, setData] = useState({
        title: "",
    });

    useEffect(() => {
        fetch(`/api/books/${bookID}`)
          .then((res) => res.json())
          .then((data) => {
            setData(data);
        });
    }, [bookID]);

    const deleteBook = (id: number | undefined) => {
        fetch(`/api/books/${id}`, { method: 'DELETE'})
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          console.log('Resource deleted successfully');
        })
        .catch(error => {
          console.error('There was a problem with the DELETE request:', error.message);
        });
    };

    return (
        <div>
            {bookID && data.title ?
            (
                <div>
                  <h1>Are you sure you want to delete {data.title} from booklist?</h1>
                  <button className="deleteButton" onClick={() => deleteBook(parseInt(bookID))}>Delete</button>
                </div>
            ) : (
                <div>Book Not Found</div>
            )}
        </div>
    );
};
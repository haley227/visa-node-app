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

    return (
        <div>
        {data.title ? (<div>
            <h1>Are you sure you want to delete {data.title} from booklist?</h1>
        </div>) : (
            <div>Book Not Found</div>
        )}
        </div>
    );
};
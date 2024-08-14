import { Link } from 'react-router-dom';
import './BookCard.css';

export interface BookCardProps {
  id: number;
  title: string;
  author: string;
  yearPublished: number;
  genre: string;
}

export const BookCard = ({
    id,
    title,
    author,
    yearPublished,
    genre,
}: BookCardProps) => {
    return (
        <div className="card">
            <div className="card-body">
                <h2>{title}</h2>
                <p>Author: {author}</p>
                <p>Published {yearPublished}</p>
                <p>Genre: {genre}</p>
                <Link to={`/edit/${id}`}>Edit Book</Link>
            </div>
        </div>
    );
};
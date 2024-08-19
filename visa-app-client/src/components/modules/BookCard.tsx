import { useNavigate } from 'react-router-dom';
import { StyledCard } from 'components/global/StyledCard.style';
import { Button } from 'components/global/Button/Button';
import { Book } from 'utils/bookListContext/types';
import { ButtonContainer } from 'components/global/Button/Button.style';
import { BookCardInner } from './BookForm';

export const BookCard = ({
    id,
    title,
    author,
    yearPublished,
    genre,
}: Book) => {
    const navigate = useNavigate();

    return (
        <StyledCard>
            <BookCardInner>
                <div>
                    <h2>{title}</h2>
                    <p>Author: {author}</p>
                    <p>Published {yearPublished}</p>
                    <p>Genre: {genre}</p>
                </div>
                <ButtonContainer align='space-between'>
                    <Button type="submit" onClick={() => navigate(`/edit/${id}`)} buttonText="Edit Book" />
                    <Button type="error" buttonText='Delete Book' onClick={() => navigate(`delete/${id}`)} />
                </ButtonContainer>
            </BookCardInner>
        </StyledCard>
    );
};
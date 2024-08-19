import { BookCard } from "components/modules/BookCard";
import { BookCardsList, NewBookCard, PageTitle } from "./BookList.style";
import useBookList from "utils/bookListContext/useBookList";
import { Book } from "utils/bookListContext/types";
import { StyledCard } from "components/global/StyledCard.style";
import { ReactComponent as PlusSVG } from 'assets/plus.svg';
import { useNavigate } from "react-router-dom";

export const BookList = () => {
    const { bookList } = useBookList();
    const navigate = useNavigate();

    return (
      <BookCardsList>
        <PageTitle>Book List</PageTitle>
        <StyledCard>
            <NewBookCard onClick={() => navigate(`add`)}>
                <PlusSVG />
                <div>Add New Book</div>
            </NewBookCard>
          </StyledCard>
          {bookList.map((book: Book) =>
            <BookCard key={book.id} {...book} />
          )}
      </BookCardsList>
    );
};
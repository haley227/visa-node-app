import { useParams } from "react-router-dom";
import useBookList from "../../utils/bookListContext/useBookList";
import { StyledCard } from "../global/StyledCard.style";
import { Button } from "../global/Button/Button";
import { ButtonContainer } from "../global/Button/Button.style";
import { PageNotFound } from "./PageNotFound";
import { CentralMessage } from "../global/CentralMessage.style";

export const DeleteBook = () => {
    const { bookList, removeBook } = useBookList();

    const bookID = useParams().id;
    const book = bookList.find((book) => book.id === parseInt(bookID || ''));

    if (!book || !bookID) {
      return <PageNotFound />;
    }

    return (
        <CentralMessage>
            <StyledCard>
                <div>
                    <h1>Are you sure you want to delete {book.title} from booklist?</h1>
                    <ButtonContainer align='center'>
                        <Button type="error" onClick={() => removeBook(bookID)} buttonText="Delete" />
                    </ButtonContainer>
                </div>
            </StyledCard>
        </CentralMessage>
    );
};
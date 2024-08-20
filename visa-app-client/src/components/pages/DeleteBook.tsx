import { useParams } from 'react-router-dom';
import useBookList from 'utils/bookListContext/useBookList';
import { StyledCard } from 'components/global/StyledCard.style';
import { Button, ButtonContainer } from 'components/global/Button';
import { PageNotFound } from './PageNotFound';
import { CentralMessage } from 'components/global/CentralMessage.style';
import { InnerBox } from './Delete.style';

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
        <InnerBox>
          <h1>Are you sure you want to delete <br />{book.title}?</h1>
          <ButtonContainer align="center">
            <Button type="error" onClick={() => removeBook(bookID)} buttonText="Delete" />
          </ButtonContainer>
        </InnerBox>
      </StyledCard>
    </CentralMessage>
  );
};

import { useState } from "react";
import { Book } from "../../utils/bookListContext/types";
import { Button } from "../global/Button/Button";
import { StyledCard } from "../global/StyledCard.style"
import { FormRow, StyledForm, Title } from "./BookForm.style";
import { CentralMessage } from "../global/CentralMessage.style";

export const BookForm = ({ title, book, onSubmit }: { title?: string; book?: Book; onSubmit: (formData: any) => void; }) => {
    const defaultValues = book || {
        title: '',
        author: '',
        yearPublished: 0,
        genre: '',
    };
  const [bookValue, setBookValue] = useState<Book>(defaultValues);
  const [error, setError] = useState('');

  const handleInputChange = (e: any) => {
    const { value, name } = e.target;

    setBookValue({
      ...bookValue,
      [name]: value,
    });

    // Validate if the input is not empty
    if (!value.trim() || value === '') {
      setError('This field is required.');
    } else {
      setError('');
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (!error) {
       onSubmit(bookValue);
    }
  };

    return (
        <CentralMessage>
            <StyledCard>
                {title && <Title>{title}</Title>}
                <StyledForm onSubmit={handleSubmit}>
                    <FormRow>
                        <label htmlFor="title">Title</label>
                        <input aria-label="title" type="text" name="title" defaultValue={book?.title} onChange={handleInputChange} required />
                    </FormRow>
                    <FormRow>
                        <label htmlFor="author">Author</label>
                        <input aria-label="author" type="text" name="author" defaultValue={book?.author} onChange={handleInputChange} required  />
                    </FormRow>
                    <FormRow>
                        <label htmlFor="yearPublished">Year Published</label>
                        <input type="number" aria-label="year published" name="yearPublished" defaultValue={book?.yearPublished} onChange={handleInputChange} required />
                    </FormRow>
                    <FormRow>
                        <label htmlFor="genre">Genre</label>
                        <input type="text" aria-label="genre" name="genre" defaultValue={book?.genre} onChange={handleInputChange} required />
                    </FormRow>
                    <FormRow>
                        <Button type="submit" aria-label="Submit button" buttonText="Submit" />
                    </FormRow>
                </StyledForm>
            </StyledCard>
        </CentralMessage>
    );
};

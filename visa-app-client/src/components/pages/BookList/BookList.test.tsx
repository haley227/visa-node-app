import { render, screen } from '@testing-library/react';
import { BookList } from './BookList';
import { BrowserRouter } from 'react-router-dom';

test('renders title', () => {
  render(<BookList />, { wrapper: BrowserRouter });
  const linkElement = screen.getByText(/book list/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders add book card', () => {
  render(<BookList />, { wrapper: BrowserRouter });
  const addBook = screen.getByTestId('add-book-card');
  expect(addBook).toBeInTheDocument();
});

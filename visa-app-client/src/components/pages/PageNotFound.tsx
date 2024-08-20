import { NotFoundBody, NotFoundContainer } from './PageNotFound.style';

export const PageNotFound = () => {
  return (
    <NotFoundBody>
      <NotFoundContainer>
        <h1>404</h1>
        <p>Page not found</p>
        <a href="/">Go Home</a>
      </NotFoundContainer>
    </NotFoundBody>
  );
};

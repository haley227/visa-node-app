import styled from 'styled-components';

export const BookCardsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;

  > div {
    width: 250px;
  }
`;

export const PageTitle = styled.h1`
  width: 100%;
  text-align: center;
`;

export const NewBookCard = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  cursor: pointer;

  svg {
    width: 50px;
  }

  &:hover {
    transform: scale(1.05);
  }
`;

import { NavContainer, NavLink } from './Nav.style';

export const Nav = () => {
  return (
    <NavContainer>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/add">Add Book</NavLink>
    </NavContainer>
  );
};

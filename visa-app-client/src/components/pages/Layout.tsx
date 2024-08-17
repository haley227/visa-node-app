import { Outlet, Link } from "react-router-dom";
import { Nav } from "../global/Nav/Nav";
import { Body } from "../global/LandingPage.style";
import { BookListProvider } from "../../utils/bookListContext/BookListProvider";

export const Layout = () => {
  return (
    <>
      <Nav />
      <BookListProvider>
        <Body>
            <Outlet />
        </Body>
      </BookListProvider>
    </>
  )
};

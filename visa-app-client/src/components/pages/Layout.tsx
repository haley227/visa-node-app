import { Outlet } from "react-router-dom";
import { Nav } from "components/global/Nav";
import { Body } from "components/global/LandingPage.style";
import { BookListProvider } from "utils/bookListContext/BookListProvider";

export const Layout = () => {
  return (
    <main>
      <Nav />
      <BookListProvider>
        <Body>
            <Outlet />
        </Body>
      </BookListProvider>
    </main>
  )
};

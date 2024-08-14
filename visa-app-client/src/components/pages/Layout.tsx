import { Outlet, Link } from "react-router-dom";
import { Nav } from "../global/Nav/Nav";

export const Layout = () => {
  return (
    <>
      <Nav />

      <Outlet />
    </>
  )
};

import { Link } from "react-router-dom"
import { NavContainer } from "./Nav.style"

export const Nav = () => {
    return (
        <NavContainer>
            <Link to="/">Home</Link>
            <Link to="/add">Add Book</Link>
        </NavContainer>
    )
}
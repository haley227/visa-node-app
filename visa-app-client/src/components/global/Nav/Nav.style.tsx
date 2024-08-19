import styled from "styled-components";
import COLORS from "consts/colors";
import { Link } from "react-router-dom";

export const NavContainer = styled.nav`
    display: flex;
    gap: 1rem;
    align-items: center;
    padding: 1rem 2rem;
    background-color: ${COLORS.grey1};
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const NavLink = styled(Link)`
    text-decoration: none;
    color: ${COLORS.black};
    font-weight: 600;
    font-size: 1.2rem;
    background-image: linear-gradient(
        to right,
        ${COLORS.skyBlue},
        ${COLORS.skyBlue} 50%,
        #000 50%
    );

    background-size: 200% 100%;
    background-position: -100%;
    display: inline-block;
    padding: 5px 0;
    position: relative;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: all 0.3s ease-in-out;


    &:before {
        content: '';
        background: ${COLORS.skyBlue};
        display: block;
        position: absolute;
        bottom: -3px;
        left: 0;
        width: 0;
        height: 3px;
        transition: all 0.3s ease-in-out;
    }

    &:hover {
        background-position: 0;
    }

    &:hover::before {
        width:100%;
    }
`;
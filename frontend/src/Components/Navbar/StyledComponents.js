import styled from "styled-components";

// Router Link
import { NavLink } from "react-router-dom";

export const Nav = styled.nav`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    column-gap: 50px;
`;

export const Link = styled(NavLink)`
    outline: none;
    border: none;
    text-decoration: none;
    text-transform: capitalize;
    color: #333;
    font-weight: 600;
    cursor: pointer;
    position: relative;

    &::after {
        content: "";
        position: absolute;
        bottom: -2px;
        left: 0;
        width: 100%;
        height: 3px;
        background-image: linear-gradient(to right, transparent 0%, transparent 50%, #333 51%, #333 100%);
        background-position: top left;
        background-size: 250% 100%;
        transition: background-position 200ms linear;
    }

    &:hover::after,
    &.active::after {
        background-position: top right;
    }
`;

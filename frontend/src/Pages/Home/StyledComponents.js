import styled from "styled-components";

export const Container = styled.div`
    max-width: 600px;
    width: 95%;
    margin: 0 auto;
    background-color: #fff;
    padding: 50px;
    border-radius: 20px;
`;

export const Form = styled.form`
    display: grid;
    row-gap: 20px;
`;

export const Button = styled.button`
    appearance: none;
    border: none;
    outline: 2px solid currentColor;
    padding: 1rem;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    text-transform: uppercase;
    font-weight: 700;
    background-color: transparent;
    color: #fff;
    position: relative;
    isolation: isolate;
    transition: color 500ms linear 200ms;

    &:hover {
        color: #333;
    }

    &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        border-radius: inherit;
        background-image: linear-gradient(to right, #333 0%, #333 50%, transparent 51%, transparent 100%);
        background-position: top left;
        background-size: 250% 100%;
        transition: background-position 500ms linear;
    }

    &:hover::after {
        background-position: top right;
    }
`;

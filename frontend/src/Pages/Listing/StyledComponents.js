import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-auto-rows: minmax(200px, 1fr);
    gap: 20px;
    max-width: 1200px;
    width: 95%;
    margin: 0 auto;
    background-color: #fff;
    padding: 50px;
    border-radius: 20px;
`;

export const Info = styled.p`
    text-transform: uppercase;
    font-size: 24px;
    font-weight: 500;
    text-align: center;
    color: #333;

    & > a {
        outline: none;
        text-decoration: 2px solid underline currentColor;
        color: #333;

        &:hover {
            color: #000;
            font-weight: 700;
        }
    }
`;

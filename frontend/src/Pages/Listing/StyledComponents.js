import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    max-width: 1200px;
    width: 95%;
    margin: 0 auto;
    background-color: #fff;
    padding: 50px;
    border-radius: 20px;
`;

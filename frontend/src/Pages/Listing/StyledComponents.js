import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  grid-template-rows: minmax(0, 1fr);
  max-width: 1200px;
  width: 95%;
  height: 100%;
  margin: 0 auto;
  background-color: #fff;
  padding: 20px 10px;
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

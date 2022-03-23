import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    row-gap: 20px;
    padding: 10px;
    border: 2px solid black;
    border-radius: 20px 0;
    background-color: #fff;
    transition: all 300ms ease-in-out;

    &:hover {
        border-radius: 0 20px;
        transform: scale(1.3);
    }
`;

export const Desc = styled.p`
    margin: 0;
    padding: 0;
    font-size: 18px;
    text-align: justify;
`;

export const TimeWrapper = styled.div`
    display: flex;
    flex-flow: row wrap;
    align-items: baseline;
    justify-content: space-between;
`;

export const Time = styled.div`
    display: flex;
    flex-flow: column nowrap;
    text-align: ${({ align }) => align};
`;

export const Title = styled.span`
    font-size: 14px;
    font-weight: bold;
`;

export const Value = styled.span`
    font-size: 12px;
`;

import styled from "styled-components";

export const Container = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    margin-top: 10px;
    width: 250px;
    background-color: #333;
    padding: 20px 10px;
    border-radius: 7px 0 0 7px;
    transition: all 500ms linear;
    transform-origin: top right;

    &.hide {
        transform: scale(0);
    }
`;

export const Text = styled.p`
    margin: 0;
    color: #f8f8f8;
    font-size: 18px;
    font-weight: 300;
`;

export const Close = styled.span`
    position: absolute;
    top: 0;
    right: 0;
    color: #fff;
    font-size: 12px;
    margin: 5px 7px 0 0;
    cursor: pointer;
`;

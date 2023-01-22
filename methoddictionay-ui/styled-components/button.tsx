import styled from "styled-components"
import Link from "next/link";

export const LinkLargeButton = styled(Link)`
    width: fit-content;
    display: block;
    font-size: 1rem;
    background-color: #0EA5E9;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 15px 20px;
    cursor: pointer;
    transition: all 0.2s;
    margin: 0 auto;

    &:hover {
        background-color: #58c0f0;
    }
`;
export const LinkButton = styled(LinkLargeButton)`
    padding: 10px 15px;
`;
export const GreyButton = styled.button`
    font-size: 1rem;
    display: block;
    padding: 10px 15px;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.2s;
    margin: 0 auto;

    &:hover {
        background-color: #a8a8a8;
    }
`;
export const BlueButton = styled.button`
    font-size: 1rem;
    display: block;
    width: 100px;
    height: 100px;
    background-color: #0EA5E9;
    color: white;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.2s;
    margin: 0 auto;

    &:hover {
        background-color: #58c0f0;
    }
`;

export const PurpleAnchorButton = styled.a`
    width: fit-content;
    font-size: 1rem;
    display: block;
    padding: 10px 25px;
    color: white;
    background-color: #3f52ff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.2s;
    margin: 0 auto;

    &:hover {
        background-color: #a5aefd;
    }
`;
export const BlueAnchorButton = styled.a`
    width: fit-content;
    font-size: 1rem;
    display: block;
    padding: 10px 15px;
    color: white;
    background-color: #0EA5E9;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.2s;
    margin: 0 auto;

    &:hover {
        background-color: #58c0f0;
    }
`;


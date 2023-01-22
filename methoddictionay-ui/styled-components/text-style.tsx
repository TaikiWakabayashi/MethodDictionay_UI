import styled from "styled-components";

export const H1 = styled.h1<{ color: string, textAlign?: string }>`
    text-align: center;
    font-size: 5rem;
    color: ${(props) => props.color};
    text-align: ${(props) => props.textAlign};
    margin: 0;
`;

export const H2 = styled.h2<{ color: string, textAlign?: string }>`
    font-size: 2.5rem;
    color: ${(props) => props.color};
    text-align: ${(props) => props.textAlign}
`

export const H3 = styled.h3<{ color: string, textAlign?: string }>`
    font-size: 1.5rem;
    color: ${(props) => props.color};
    text-align: ${(props) => props.textAlign}
`

export const ListLabel = styled.p`
    display: inline-flex;
    align-items: center;
    color: #0EA5E9;
    font-size: 1rem;
    font-weight: bold;
`

export const MethodTitle = styled.p`
    height: 40px;
    justify-self: center;
    width: fit-content;
    border-radius: 5px;
    padding: 10px 15px;
    background-color: #0EA5E9;
`

export const Span = styled.span`
    color: #0EA5E9;
    padding-left: 5px;
    font-size: 1rem;
`
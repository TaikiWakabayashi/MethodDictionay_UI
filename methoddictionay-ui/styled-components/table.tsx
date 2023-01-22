import styled from "styled-components"

export const Table = styled.table`
    width: 100%;
    max-width: 1000px;
    /* border-collapse: collapse; */
    border: 1px solid white;
    border-radius: 15px;
    padding: 25px;
    margin: 0 auto;
    margin-top: 50px;
`

export const TBody = styled.tbody`
    width: 50%;
`

export const THead = styled.tbody`
    width: 50%;
`

export const Th = styled.td`
    padding: 15px;
    text-align: center;
    font-size: 1.5rem;
    font-weight: bold;
`

export const Tr = styled.tr<{ height?: string , bgColor?: string }>`
    background-color: ${props => props.bgColor};
    height: ${props => props.height};
`

export const Td = styled.td<{ textAlign?: string, color?: string }>`
    padding: 15px;
    width: 50%;
    font-weight: bold;
    text-align: ${props => props.textAlign};
    color: ${props => props.color};
`
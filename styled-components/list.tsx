import styled from "styled-components"

export const List = styled.ul`
    padding: 0;
    margin: 0;
    list-style: none;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 100px 100px 100px 100px 100px 100px 200px;
    align-items: center;
`

export const KeywordGrid = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
`
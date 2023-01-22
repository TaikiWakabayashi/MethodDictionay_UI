import styled from "styled-components"

export const Grid = styled.div`
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    margin-bottom: 3%;
    display: grid;
    grid-template-rows: 200px;
    grid-template-columns: 20% 50% 30%;
    align-items: center;
    /* justify-items: center; */
    background-color: #1E293B;
    border-radius: 15px;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    border-left: 1px solid rgba(255, 255, 255, 0.2);
`

export const FlexButton = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`
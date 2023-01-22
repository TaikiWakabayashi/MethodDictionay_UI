import styled from "styled-components"

export const HeaderDiv = styled.div`
    width: 200px;
    height: 160px;
    position: fixed;
    z-index: 100;
    top: 0;
    right: 0%;
`

export const UL = styled.ul`
    width: 200px;
    height: 100%;
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
`

export const LI = styled.li`
    width: 100%;
    height: 100%;
    color: #0EA5E9;
    padding: 0 20px;
    background-color: rgba(9, 13, 24, 0.4);
    text-align: center;
    display: flex;
    align-items: center;
    :nth-of-type(2) {
        cursor: pointer;
    }
`
export const P = styled.p`
    width: 100%;
    display: inline-flex;
    align-items: center;
    padding-bottom: 10px;
    margin: 0;
    border-bottom: 1px solid #0EA5E9;
`
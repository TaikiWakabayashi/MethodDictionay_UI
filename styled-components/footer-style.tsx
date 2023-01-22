import styled from "styled-components";

const FooterStyle = styled.div`
    background-color: #0a101d;
    margin-top: 150px;
    padding: 50px 0;
`

export const FooterTitle = styled.div`
    width: 100%;
    border-bottom: 1px solid #1e2d52;
`

export const SNSZone = styled.div`
    width: 100%;
    max-width: 300px;
    display: flex;
    justify-content: space-around;
    margin: 50px auto;
`

export const Author = styled.p`
    font-weight: bold;
    color: #1e2d52;
    text-align: right;
    margin: 0;
    margin-top: 10px;
`

export default FooterStyle;
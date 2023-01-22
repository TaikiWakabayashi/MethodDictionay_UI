import styled from "styled-components";

export const Form = styled.form`
    display: grid;
    grid-template-rows: 100px 100px 100px 100px 100px 100px 200px 1fr;
    align-items: center;
    justify-items: center;
`

export const EditFormGrid = styled.form`
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 100px 100px 100px 100px 100px 100px 200px;
`

export const Input = styled.input`
    width: 100%;
    height: 27px;
    border-radius: 5px;
    border: none;
    margin-top: 10px;
    color: black;
    background-color: white;
`;

export const Textarea = styled.textarea`
    width: 100%;
    height: 120px;
    border-radius: 5px;
    border: none;
    margin-top: 10px;
    color: black;
    background-color: white;
`

export const FormLabel = styled.label`
    color: #0EA5E9;
    letter-spacing: 2px;
    margin: 7px 0;
`

export const InputButton = styled.input`
    display: block;
    color: white;
    padding: 15px 20px;
    font-size: 1rem;
    cursor: pointer;
    border-radius: 7px;
    border: none;
    margin: 0 auto;
    background-color:#F472B6;
    transition: all 0.2s;

    &:hover {
    background-color: #ec9cc5;
    }
`
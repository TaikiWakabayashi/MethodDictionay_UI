import styled from "styled-components";

export const InputSpacer = styled.div<{ rows?: string, columns?: string }>`
    width: 100%;
    max-width: 400px;
    margin: 0 auto;

    :nth-of-type(1) {
        grid-row: ${(props) => props.rows };
        grid-column: ${(props) => props.columns };
    }
    :nth-of-type(2) {
        grid-row: ${(props) => props.rows };
        grid-column: ${(props) => props.columns };
    }
    :nth-of-type(3) {
        grid-row: ${(props) => props.rows };
        grid-column: ${(props) => props.columns };
    }
    :nth-of-type(4) {
        grid-row: ${(props) => props.rows };
        grid-column: ${(props) => props.columns };
    }
    :nth-of-type(5) {
        grid-row: ${(props) => props.rows };
        grid-column: ${(props) => props.columns };
    }
    :nth-of-type(6) {
        grid-row: ${(props) => props.rows };
        grid-column: ${(props) => props.columns };
    }
    :nth-of-type(7) {
        grid-row: ${(props) => props.rows };
        grid-column: ${(props) => props.columns };
    }
    
`;

export const EditInputSpacer = styled(InputSpacer)`
    width: 80%;
`

export const FormSpacer = styled.div`
    border: 1px solid white;
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    border-radius: 10px;
`

export const ButtonSpacer = styled.div`
    padding: 30px 0;
`
export const ButtonSpacerFlex = styled(ButtonSpacer)`
    display: flex;
    justify-content: space-around;
    width: 500px;
    padding: 30px 0;
    margin: 0 auto;

`

export const SearchFormSpacer = styled.div`
    width: 100%;
    max-width: 1000px;
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
    height: 250px;
    align-items: center;
    justify-items: center;
    text-align: center;
    margin: 0 auto;
    margin-bottom: 3%;
    border: 1px solid white;
    border-radius: 10px;
`

export const ListInputSpacer = styled.div`
    width: 80%;
    display: grid;
    grid-auto-rows: 100%;
    grid-template-columns:50% 50%;
    margin: 10px auto 20px auto; 
    border: 1px solid white;
    border-radius: 10px;
    padding: 10px;
`
export const ListTextareaSpacer = styled.div`
    width: 80%;
    margin: 10px auto 15px auto; 
    border: 1px solid white;
    border-radius: 10px;
    padding: 10px;
`

export const DetailSpacer = styled.div`
    width: 100%;
    max-width: 1000px;
    display: grid;
    border: 1px solid white;
    border-radius: 15px;
    margin: 0 auto;
`
import { createContext, useContext, useState, Dispatch, SetStateAction } from "react";
import type { childrenPropsType } from "../type/children";

type stateType = {
    [k: string]: string;
}

type setUseStateType = {
    [k: string]: Dispatch<SetStateAction<string>>;
}

type FormType = {
    states: stateType;
    setStates: setUseStateType;
}

const formContext = createContext({} as FormType);

const FormsContext = (props: childrenPropsType) => {

    const { children } = props;

     /* language */
     const [ language, setLanguage ] = useState("");

    /* methodName */
    const [ methodName, setMethodName ] = useState("");

    /* type */
    const [ type, setType ] = useState("");

    /* description */
    const [ description, setDescription ] = useState("");

    /* keyword1 */
    const [ keyword1, setKeyword1 ] = useState("");

    /* keyword2 */
    const [ keyword2, setKeyword2 ] = useState("");

    /* keyword3 */
    const [ keyword3, setKeyword3 ] = useState("");

    const statesObj: stateType = {
        language,
        methodName,
        type,
        description,
        keyword1,
        keyword2,
        keyword3,
    }

    const setStatesObj: setUseStateType = {
        setLanguage,
        setMethodName,
        setType,
        setDescription,
        setKeyword1,
        setKeyword2,
        setKeyword3,
    }

    const formObj = {
        states: statesObj,
        setStates: setStatesObj,
    }

    return (
        <formContext.Provider value={formObj}>
            { children }
        </formContext.Provider>
    )
}

const useFormsContext = () => {
    return useContext(formContext);
}

export { FormsContext, useFormsContext };
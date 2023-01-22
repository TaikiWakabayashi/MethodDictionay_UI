import { createContext, useState, Dispatch, SetStateAction, useContext, useEffect } from "react"
import type { methodType } from "../type/methodType";
import type { childrenPropsType } from "../type/children";

export const methodContext = createContext({} as {method: methodType, setMethod: Dispatch<SetStateAction<methodType>>} );

const MethodContext = (props: childrenPropsType) => {

    const { children } = props;

    const obj: methodType = {
        id: 0,
        language: "",
        methodName: "",
        type: "",
        description: "",
        keyword1: "",
        keyword2: "",
        keyword3: "",
    }

    const [ method, setMethod ] = useState<methodType>(obj);

    return (
        <methodContext.Provider value={{ method, setMethod }}>
            { children }
        </methodContext.Provider>
    )
}

const useMethodContext = () => {
    return useContext(methodContext);
}

export { MethodContext, useMethodContext };
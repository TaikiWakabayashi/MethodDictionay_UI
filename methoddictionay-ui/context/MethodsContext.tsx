import { createContext, useState, ReactNode, Dispatch, SetStateAction, useContext } from "react"
import type { methodsType } from "../type/methodType";
import type { childrenPropsType } from "../type/children";


export const methodsContext = createContext({} as {methods: methodsType, setMethods:Dispatch<SetStateAction<methodsType>>} );

const MethodsContext = (props: childrenPropsType) => {

    const { children } = props;

    const [ methods, setMethods ] = useState<methodsType>([]);

    return (
        <methodsContext.Provider value={{ methods, setMethods }}>
            { children }
        </methodsContext.Provider>
    )
}

const useMethodsContext = () => {
    return useContext(methodsContext);
}

export { MethodsContext, useMethodsContext };
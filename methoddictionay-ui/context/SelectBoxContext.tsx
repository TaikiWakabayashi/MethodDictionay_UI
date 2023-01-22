import { createContext, useContext, Dispatch, SetStateAction, useState } from "react";
import type { childrenPropsType } from "../type/children";

// 言語選択用セレクトボックス管理コンテキスト
const selectLanguage = createContext({} as {languages: string[], setLanguages: Dispatch<SetStateAction<string[]>>});

// 型洗濯用セレクトボックス管理コンテキスト
const selectType = createContext({} as {types: string[], setTypes: Dispatch<SetStateAction<string[]>>});

const SelectLanguageContext = (props: childrenPropsType) => {

    // 言語選択用セレクトボックス管理ステート
    const [ languages, setLanguages ] = useState<string[]>([]);

    const { children } = props;

    return (
        <selectLanguage.Provider value={{ languages, setLanguages }}>
            { children }
        </selectLanguage.Provider>
    )
}

const SelectTypeContext = (props: childrenPropsType) => {

        // 型洗濯用セレクトボックス管理ステート
        const [ types, setTypes ] = useState<string[]>([]);

    const { children } = props;

    return (
        <selectType.Provider value={{ types, setTypes }}>
            { children }
        </selectType.Provider>
    )
}


const useSelectLanguageContext = () => {
    return useContext(selectLanguage);
}

const useSelectTypeContext = () => {
    return useContext(selectType);
}

export { SelectLanguageContext, useSelectLanguageContext, SelectTypeContext, useSelectTypeContext };

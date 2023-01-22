import { useEffect } from "react";
import { useMethodsContext } from "../context/MethodsContext";
import { useSelectLanguageContext, useSelectTypeContext } from "../context/SelectBoxContext";

const MethodURL: string = "http://localhost:8080/method"

const LanguageURL: string = "http://localhost:8080/method/language"

const TypeURL: string = "http://localhost:8080/method/type"

/* 初期表示のデータを取得 */
const useFetchHooks = () => {

    const { methods, setMethods } = useMethodsContext();

    useEffect(() => {
        fetch(MethodURL, { method: "POST"})
        .then((res) => {
            if(!res.ok) {
                console.error('response.ok:', res.ok);
                console.error('response.status:', res.status);
                console.error('response.statusText:', res.statusText);
            }else {
                res.json()
                .then((data) => setMethods(data));
            }
        })
        .catch(error => {
            console.log("エラーが発生しました", error);
        })
    }, [])

    return {
        methods,
        setMethods
    }
}

/* 検索フォームの選択言語を取得 */
const useSelectLanguageHooks = () => {

    const { methods } = useMethodsContext();

    const { languages , setLanguages } = useSelectLanguageContext();

    useEffect(() => {
        fetch(LanguageURL, { method: "GET"})
        .then((res) => {
            if(!res.ok) {
                console.error('response.ok:', res.ok);
                console.error('response.status:', res.status);
                console.error('response.statusText:', res.statusText);
            }else {
                res.json()
                .then((data) => setLanguages(data));
            }
        })
        .catch(error => {
            console.log("エラーが発生しました", error);
        })
    }, [methods])

    return {
        languages,
    }
}

/* 検索フォームの選択タイプを取得 */
const useSelectTypeHooks = () => {

    const { methods } = useMethodsContext();

    const { types , setTypes } = useSelectTypeContext();

    useEffect(() => {
        fetch(TypeURL, { method: "GET"})
        .then((res) => {
            if(!res.ok) {
                console.error('response.ok:', res.ok);
                console.error('response.status:', res.status);
                console.error('response.statusText:', res.statusText);
            }else {
                res.json()
                .then((data) => setTypes(data));
            }
        })
        .catch(error => {
            console.log("エラーが発生しました", error);
        })
    }, [methods])

    return {
        types,
    }
}

export { useFetchHooks, useSelectLanguageHooks, useSelectTypeHooks };
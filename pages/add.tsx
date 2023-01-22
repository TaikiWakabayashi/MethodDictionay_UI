import { useState, FormEvent, useEffect } from "react";
import { LinkButton } from "../styled-components/button";
import { H1, H3 } from "../styled-components/text-style";
import { useFormsContext } from "../context/FormContext";
import { Input, FormLabel, Textarea, InputButton, Form } from "../styled-components/form-parts";
import { FormSpacer, ButtonSpacer, InputSpacer } from "../styled-components/spacer";

const URL = "http://localhost:8080/method/add";

const Add = () => {

    const { states, setStates } = useFormsContext();

    const {language, methodName, type, description, keyword1, keyword2, keyword3,} = states;

    const {setLanguage, setMethodName, setType, setDescription, setKeyword1, setKeyword2, setKeyword3,} = setStates;

    const reset = () => {
        setLanguage("");
        setMethodName("");
        setType("");
        setKeyword1("");
        setKeyword2("");
        setKeyword3("");
        setDescription("");
    }

    /* 登録成功判定 */
    const [ isStatus, setIsStatus ] = useState(false);

    /* insert */
    const insert = (e: FormEvent<HTMLFormElement>) => {

        e.preventDefault();

        const request = {
            language,
            methodName,
            type,
            description,
            keyword1,
            keyword2,
            keyword3,
        };

        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            // 'X-XSRF-TOKEN': xsrf,
            body: JSON.stringify(request),
        };

        fetch(URL, requestOptions)
        .then((res) => res.json())
        .then((data) => {

            setIsStatus(data);
            if(data === true) {
                window.alert("Insert is SUCCESS !");
            }
        });
        reset();
    }
   
    return(
        <>
        <H1 color="#0EA5E9">- Insert New Method -</H1>
        <FormSpacer>
            <Form onSubmit={(e) => insert(e)}>
                <InputSpacer rows="1" columns="1">
                    <FormLabel>Language</FormLabel><br/>
                    <Input type="text" value={language} onChange={(e) => setLanguage(e.target.value)}/>
                </InputSpacer>
                <InputSpacer rows="2" columns="1">
                    <FormLabel>Method Name</FormLabel><br/>
                    <Input type="text" value={methodName} onChange={(e) => setMethodName(e.target.value)}/>
                </InputSpacer>
                <InputSpacer rows="3" columns="1">
                    <FormLabel>Type</FormLabel><br/>
                    <Input type="text" value={type} onChange={(e) => setType(e.target.value)}/>
                </InputSpacer>
                <InputSpacer rows="4" columns="1">
                    <FormLabel>Keyword1</FormLabel><br/>
                    <Input type="text" value={keyword1} onChange={(e) => setKeyword1(e.target.value)}/>
                </InputSpacer>
                <InputSpacer rows="5" columns="1">
                    <FormLabel>Keyword2</FormLabel><br/>
                    <Input type="text" value={keyword2} onChange={(e) => setKeyword2(e.target.value)}/>
                </InputSpacer>
                <InputSpacer rows="6" columns="1">
                    <FormLabel>Keyword3</FormLabel><br/>
                    <Input type="text" value={keyword3} onChange={(e) => setKeyword3(e.target.value)}/>
                </InputSpacer>
                <InputSpacer>
                    <FormLabel>Description</FormLabel><br/>
                    <Textarea value={description} onChange={(e) => setDescription(e.target.value)}></Textarea>
                </InputSpacer>
                <ButtonSpacer>
                    <InputButton type="submit" value="Submit"/>
                </ButtonSpacer>
            </Form>
        </FormSpacer>
        <ButtonSpacer>
            <LinkButton href="/">Back</LinkButton>
        </ButtonSpacer>
        </>
    )
}

export default Add;
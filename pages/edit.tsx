import { useEffect, useState, FormEvent } from "react";
import { useMethodContext } from "../context/MethodContext";
import { methodType } from "../type/methodType";
import { LinkButton } from "../styled-components/button";
import { useFormsContext } from "../context/FormContext";
import Cookie from "js-cookie";
import { H2, Span, ListLabel } from "../styled-components/text-style";
import { FormLabel, Input,Textarea, InputButton, EditFormGrid } from "../styled-components/form-parts";
import { AiFillInfoCircle } from 'react-icons/ai';
import { ButtonSpacer, ListInputSpacer, ListTextareaSpacer, EditInputSpacer } from "../styled-components/spacer";
import { EditBody, MiddleBody } from "../styled-components/bodys"
import { List } from "../styled-components/list"

const Edit = () => {

    const { states, setStates } = useFormsContext();

    const {language, methodName, type, description, keyword1, keyword2, keyword3,} = states;

    const{setLanguage, setMethodName, setType, setDescription, setKeyword1, setKeyword2, setKeyword3,} = setStates;
    
    const { method, setMethod } = useMethodContext();

    const [ isStatus, setIsStatus ] = useState(false);

    useEffect(() => {
        let saveMethod: string = localStorage.getItem("method")!;
        setMethod(JSON.parse(saveMethod));
        setIsStatus(false);
    }, [])

    const reset = () => {
        setLanguage("");
        setMethodName("");
        setType("");
        setKeyword1("");
        setKeyword2("");
        setKeyword3("");
        setDescription("");
    }

    const edit =  (e: FormEvent<HTMLFormElement>) => {

        e.preventDefault();

        const id = method.id;

        const request: methodType = {
            id,
            language,
            methodName,
            type,
            description,
            keyword1,
            keyword2,
            keyword3,
        };

        const xsrf = Cookie.get('XSRF-TOKEN')!;

        const requestOptions = {
            method: "POST",
            headers: { 
                "Content-Type": "application/json",
                'X-XSRF-TOKEN': xsrf
            },
            body: JSON.stringify(request),
        };

        fetch("http://localhost:8080/edit", requestOptions)
        .then((res) => res.json())
        .then((data) => setMethod(data));
        setIsStatus(true);
        reset();
    }

    return (
        <>
        <EditBody>
            <MiddleBody>
                <H2 color="#0EA5E9" textAlign="center">BEFORE</H2>
                <List>
                    <li>
                        <ListInputSpacer>
                            <ListLabel><AiFillInfoCircle/><Span>Language</Span></ListLabel>
                            <p>{method.language}</p>
                        </ListInputSpacer>
                    </li>
                    <li>
                        <ListInputSpacer>
                            <ListLabel><AiFillInfoCircle/><Span>Method Name</Span></ListLabel>
                            <p>{method.methodName}</p>
                        </ListInputSpacer>
                    </li>
                    <li>
                        <ListInputSpacer>
                            <ListLabel><AiFillInfoCircle/><Span>Type</Span></ListLabel>
                            <p>{method.type}</p>
                        </ListInputSpacer>
                    </li>
                    <li>
                        <ListInputSpacer>
                            <ListLabel><AiFillInfoCircle/><Span>Keyword1</Span></ListLabel>
                            <p>{method.keyword1}</p>
                        </ListInputSpacer>
                    </li>
                    <li>
                        <ListInputSpacer>
                            <ListLabel><AiFillInfoCircle/><Span>Keyword2</Span></ListLabel>
                            <p>{method.keyword2}</p>
                        </ListInputSpacer>
                    </li>
                    <li>
                        <ListInputSpacer>
                            <ListLabel><AiFillInfoCircle/><Span>Keyword3</Span></ListLabel>
                            <p>{method.keyword3}</p>
                        </ListInputSpacer>
                    </li>
                    <li>
                        <ListTextareaSpacer>
                            <ListLabel><AiFillInfoCircle/><Span>Description</Span></ListLabel>
                            <p>{method.description}</p>
                        </ListTextareaSpacer>
                    </li>
                </List>
            </MiddleBody>
            <MiddleBody>
                <H2 color="#0EA5E9" textAlign="center">AFTER</H2>
                {
                    isStatus&&(<h2>変更が完了しました。</h2>)
                }
                <EditFormGrid onSubmit={(e) => edit(e)}>
                    <EditInputSpacer>
                        <FormLabel>Language</FormLabel><br/>
                        <Input type="text" value={language} onChange={(e) => setLanguage(e.target.value)}/>
                    </EditInputSpacer>
                    <EditInputSpacer>
                        <FormLabel>Method Name</FormLabel><br/>
                        <Input type="text" value={methodName} onChange={(e) => setMethodName(e.target.value)}/>
                    </EditInputSpacer>
                    <EditInputSpacer>
                        <FormLabel>Type</FormLabel><br/>
                        <Input type="text" value={type} onChange={(e) => setType(e.target.value)}/>
                    </EditInputSpacer>
                    <EditInputSpacer>
                        <FormLabel>Keyword1</FormLabel><br/>
                        <Input type="text" value={keyword1} onChange={(e) => setKeyword1(e.target.value)}/>
                    </EditInputSpacer>
                    <EditInputSpacer>
                        <FormLabel>Keyword2</FormLabel><br/>
                        <Input type="text" value={keyword2} onChange={(e) => setKeyword2(e.target.value)}/>
                    </EditInputSpacer>
                    <EditInputSpacer>
                        <FormLabel>Keyword3</FormLabel><br/>
                        <Input type="text" value={keyword3} onChange={(e) => setKeyword3(e.target.value)}/>
                    </EditInputSpacer>
                    <EditInputSpacer>
                        <FormLabel>Description</FormLabel><br/>
                        <Textarea value={description} onChange={(e) => setDescription(e.target.value)}></Textarea>
                    </EditInputSpacer>
                    <ButtonSpacer>
                        <InputButton type="submit" value="Submit"/>
                    </ButtonSpacer>
                </EditFormGrid>
            </MiddleBody>
        </EditBody>
        <ButtonSpacer>
            <LinkButton href="/">Back</LinkButton>
        </ButtonSpacer>
        </>
    )
}

export default Edit;
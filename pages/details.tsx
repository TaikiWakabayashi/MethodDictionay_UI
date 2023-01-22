import { LinkButton } from "../styled-components/button";
import { useMethodContext } from "../context/MethodContext";
import { useEffect } from "react";
import { H1, H2, H3 } from "../styled-components/text-style";
import SelectOneMethodRouter from "../components/SelectOneMethodRouter";
import { KeywordGrid } from "../styled-components/list";
import { ButtonSpacerFlex } from "../styled-components/spacer";
import { Table, Tr, Th,  Td, THead, TBody } from "../styled-components/table";

const Details = () => {

    const { method, setMethod } = useMethodContext();

    useEffect(() => {
        let saveMethod: string = localStorage.getItem("method")!;
        setMethod(JSON.parse(saveMethod));
    }, [])

    return (
        <>
            <H1 color="#0EA5E9">- Details -</H1>
             {/* 編集ページ遷移ボタン */}
             <ButtonSpacerFlex>
                <SelectOneMethodRouter url="edit" id={method.id}>Edit</SelectOneMethodRouter>
                <LinkButton href="/">Back</LinkButton>
             </ButtonSpacerFlex>
             <Table>
                <THead>
                    <Tr bgColor="#0EA5E9">
                        <Th>COLUMN</Th>
                        <Th>DATA</Th>
                    </Tr>
                </THead>
                <TBody>
                    <tr>
                        <Td textAlign="center">Method Name</Td>
                        <Td textAlign="center">{method.methodName}</Td>
                    </tr>
                    <Tr bgColor="#0EA5E9">
                        <Td textAlign="center">Language</Td>
                        <Td textAlign="center">{method.language}</Td>
                    </Tr>
                    <tr>
                        <Td textAlign="center">Type</Td>
                        <Td textAlign="center">{method.type}</Td>
                    </tr>
                    <Tr bgColor="#0EA5E9">
                        <Td textAlign="center">Keyword1</Td>
                        <Td textAlign="center">{(method.keyword1 === null) ? "なし" : `${method.keyword1}`}</Td>
                    </Tr>
                    <tr>
                        <Td textAlign="center">Keyword2</Td>
                        <Td textAlign="center">{(method.keyword2 === null) ? "なし" : `${method.keyword2}`}</Td>
                    </tr>
                    <Tr bgColor="#0EA5E9">
                        <Td textAlign="center">Keyword3</Td>
                        <Td textAlign="center">{(method.keyword3 === null) ? "なし" : `${method.keyword3}`}</Td>
                    </Tr>
                    <Tr height="100px">
                        <Td textAlign="center">Description</Td>
                        <Td>{method.description}</Td>
                    </Tr>
                    <Tr>
                        {/* <Td></Td>
                        <Td></Td> */}
                    </Tr>
                </TBody>
             </Table>
        </>
    )
}

export default Details;
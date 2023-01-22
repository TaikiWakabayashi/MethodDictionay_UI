import { useRouter } from "next/router";
import { ReactNode } from "react";
import { PurpleAnchorButton, BlueAnchorButton } from "../styled-components/button";

type propsType = {
    children: ReactNode;
    id: number;
    url: string;
}

const SelectOneMethodRouter = (props: propsType) => {

    const { children, id, url } = props;

    // const { setMethod } = useMethodContext();

    const router = useRouter();

    const handleClick = (id: number) => {
        fetch(`http://localhost:8080/edit/${id}`, { method: "GET"})
        .then((res) => {
            if(!res.ok) {
                console.error('response.ok:', res.ok);
                console.error('response.status:', res.status);
                console.error('response.statusText:', res.statusText);
            }else {
                res.json()
                .then((data) => {
                    if(!localStorage.getItem("method")) {
                        localStorage.removeItem("method");
                    }
                    localStorage.setItem("method", JSON.stringify(data));
                })
            }
        })
        .catch(error => {
            console.log("エラーが発生しました", error);
        })

        if(url === "edit") {
            router.push("/edit");

        }else if(url === "details") {
            router.push("/details")
        }
    }

    return (
        <>{
            (url === "edit") ? 
            <PurpleAnchorButton href={url} onClick={() => handleClick(id)}>{ children }</PurpleAnchorButton> 
            : 
            <BlueAnchorButton href={url} onClick={() => handleClick(id)}>{ children }</BlueAnchorButton>
        }
        </>
    )
}

export default SelectOneMethodRouter;
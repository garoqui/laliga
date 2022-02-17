import { useState, useEffect } from "react";


export const useMessage =({type,text,title,display})=>{
    const [messageType, setMessageType] = useState("");
    const [messageText, setMessageText] = useState("");
    const [messageTitle, setMessageTitle] = useState("");
    const [messageDisplay, setMessageDisplay] = useState(false);

    useEffect(()=>{
        setMessageType(type)
        setMessageText(text)
        setMessageTitle(title)
        setMessageDisplay(display)
    }, [type,text,title,display])

    return {messageType, messageText, messageTitle, messageDisplay}
}
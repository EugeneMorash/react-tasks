import React from 'react';
import {Message} from "./components/Message";
import "./style.css"



export function App4() {
    const messageTime = new Date().toLocaleTimeString();
    return (
        <div>
            <Message nickname={"Vova"} messageText={"Идейные соображения высшего порядка, а также постоянное информационно-пропогандистское обеспечение нашей деятельности требует определения и уточнения поставленных обществом и правительством задач."} avatarLink={"https://ak.picdn.net/contributors/190259532/avatars/thumb.jpg"} messageTime={messageTime}/>

        </div>
    )
}
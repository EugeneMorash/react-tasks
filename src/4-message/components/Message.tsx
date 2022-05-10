import React from 'react';
import "./Message.css"

type MessageTypeList = {
    nickname: string
    messageText: string
    avatarLink: string
    messageTime: string
}


export function Message(props: MessageTypeList) {

    return (
        <div className="box__row">
            <img className="box__avatar" src={props.avatarLink}
                 alt="avatar"/>
            <div className="box__block">
                <div className="box__name">{props.nickname}</div>
                <p className="box__text">{props.messageText}</p>
                <div className="box__time">{props.messageTime}</div>
            </div>
        </div>
    )
}
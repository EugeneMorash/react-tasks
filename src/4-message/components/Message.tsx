import React from 'react';

type MessageTypeList = {
    nickname: string
    messageText: string
    avatarLink: string
    messageTime: string
}


export function Message(props: MessageTypeList) {

    return (
        <div>
            <div className="message__box">
                <div className="box__row">
                    <img className="box__avatar" src={props.avatarLink}
                         alt="avatar"/>
                    <div className="box__block">
                        <h3 className="box__name">{props.nickname}</h3>
                        <p className="box__text">{props.messageText}</p>
                        <div className="box__time">{props.messageTime}</div>
                    </div>
                </div>
            </div>

        </div>
    )
}
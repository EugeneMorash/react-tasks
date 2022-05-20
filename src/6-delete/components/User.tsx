import React from 'react';
import {Button} from "./Button";

type UserPropsType = {
    name: string
    age: number
    deleteUserHandler: () => void
}


export function User(props: UserPropsType) {
    return (
        <li>
            {props.name}, {props.age}
            <Button name={'DEL'} callbackHandler={props.deleteUserHandler}/>
        </li>
    )
}

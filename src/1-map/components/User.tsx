import React from 'react';

type UserPropsType = {
    name: string
    age: number
}

export function User(props: UserPropsType) {

    return (
        <li>
            <div>Name: {props.name}</div>
            <div>Age: {props.age}</div>
        </li>
    )
}
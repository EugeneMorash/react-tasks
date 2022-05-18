import React from 'react';

type UserPropsType = {
    name: string
    age: number
}

export function User(props: UserPropsType) {
    return (
        <li>
            {props.name}, {props.age}
        </li>
    )
}

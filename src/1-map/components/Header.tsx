import React from 'react';

type HeaderPropsType = {
    text?: string
    title: string
}

export function Header(props: HeaderPropsType) {
    return(
        <header>
            <h3>{props.title}</h3>
            <p>
                {props.text}
            </p>
        </header>
    )
}


import React from 'react';


type ButtonPropsType = {
    name: string
    callbackHandler: () => void
}

export function Button(props: ButtonPropsType) {
    return (
        <button onClick={props.callbackHandler} type="button">{props.name}</button>
    );
}


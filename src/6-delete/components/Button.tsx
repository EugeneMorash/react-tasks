import React from 'react';

type ButtonPropsType = {
    name: string
    callbackHandler: () => void;
}

export function Button(props: ButtonPropsType) {
    return(
       <button type="button" onClick={props.callbackHandler} >{props.name}</button>
    )
}
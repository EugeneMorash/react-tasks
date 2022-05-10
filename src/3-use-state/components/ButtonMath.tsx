import React from 'react';

type ButtonMathPropsType = {
    name: string
    onClickHandler: () => void
}

export function Button(props: ButtonMathPropsType) {
    return (
        <button onClick={props.onClickHandler} type="button">{props.name}</button>
    )
}
import React from 'react';

type PropsType = {
    name: string
    callback: () => void
    disabled: boolean

}

export function Button(props: PropsType) {
    const onClickHandler = () => {
        props.callback()
    }
    return (
        <div>
            <button disabled={props.disabled} onClick={onClickHandler} type='button'>{props.name}</button>
        </div>
    );
}
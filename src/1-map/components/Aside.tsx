import React from 'react';

type AsidePropsType = {
    advertising: string
}

export function Aside(props: AsidePropsType) {
    return (
        <aside>
            {props.advertising}
        </aside>
    )
}
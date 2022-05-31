import React from 'react';

type CounterPropsType = {
    count: number
}

export function Counter(props: CounterPropsType) {
    return (
        <div>
            {props.count}
        </div>
    );
}

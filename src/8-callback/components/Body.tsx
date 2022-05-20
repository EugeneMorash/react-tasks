import React from 'react';

type BodyPropsType = {
    showTest: () => void
}

export function Body(props: BodyPropsType) {

    const onClickHandler = () => {
        props.showTest()
    }


    return (

        <div>
            <button onClick={onClickHandler}>Test</button>
        </div>
    );
}
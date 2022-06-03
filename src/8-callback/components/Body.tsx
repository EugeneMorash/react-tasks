import React from 'react';

type BodyPropsType = {
    showTest: () => void
}

export function Body(props: BodyPropsType) {

    const onClickHandler = () => {
        props.showTest()
    }

    //
    // if (7 > 5) {
    //     console.log()
    //     console.log()
    // }
    //
    // if (7 > 5) console.log()


    return (

        <div>
            <button onClick={onClickHandler}>Test</button>
        </div>
    );
}
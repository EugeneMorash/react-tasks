import React from "react";
import {Button} from "./Button";

type PropsType = {
    // addCountFunc: () => void
    // resetCountFunc: () => void
    // isDisabledMax: boolean
    // isDisabledMin: boolean
    changeCount: (action: 'add' | 'reset') => void
    count: number
}

export function Control(props: PropsType) {
    const onAddClickHandler = () => {
        // props.addCountFunc()
        props.changeCount('add')
    }

    const onResetClickHandler = () => {
        // props.resetCountFunc()
        props.changeCount('reset')
    }



    return (
        <div>
            {/*<Button disabled={props.isDisabledMax} name={'Add 1'} callback={onAddClickHandler}/>*/}
            {/*<Button disabled={props.isDisabledMin} name={'Reset'} callback={onResetClickHandler}/>*/}

            <Button disabled={props.count >= 5}
                    name={'Add 1'}
                    callback={onAddClickHandler}
            />

            <Button disabled={props.count === 0}
                    name={'Reset'}
                    callback={onResetClickHandler}
            />
        </div>
    )
}
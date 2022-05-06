import React from 'react';
import {Button} from "./components/Button";

export function App2() {

    // 1. Как работает кнопка
    const onClickTestHandler = () => {
        console.log("Test")
    }

    const onClickHandler = (message: string) => {
        // console.log(event.currentTarget.innerText)
        console.log(message)
    }
    // 2. Универсальная кнопка


    return (
        <div>
            <button onClick={onClickTestHandler} type="button">Test</button>

            <button onClick={() => {onClickHandler('Cat')}} type="button">Click 1</button>
            <button onClick={() => {onClickHandler('Dog')}} type="button">Click 2</button>

            {/* Разобраться, как работает call, bind, apply*/}
            {/*<button onClick={onClickHandler.bind(null, "Cat")} type="button">Click 1</button>*/}
            {/*<button onClick={onClickHandler.bind(null, "Dog")} type="button">Click 2</button>*/}

            <div>
                <Button name={"universal"} callbackHandler={onClickTestHandler}/>
                <Button name={"uni-btn"} callbackHandler={() => {onClickHandler('Uni')}}/>
            </div>
        </div>
    );
}


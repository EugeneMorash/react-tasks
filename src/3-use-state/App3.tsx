import React, {useState} from 'react';
import {Button} from "./components/ButtonMath";




type FilterType = 'add' | 'sub' | 'rand';

export function App3() {
    // let count = 0;
    // count - название переменной состояния
    // setState - функция, которая изменяет состояния, после которой произойдёт рендер компоненты

    const [count, setCount] = useState<number>(0);

    const onClickHandler = (filter: FilterType) => {
        // count++;
        if (filter === "add") {
            setCount(count + 1)
        } else if (filter === "sub")
        {
            setCount(count - 1)
        } else if (filter === "rand") {
            setCount(count + Math.floor(Math.random() * 21 - 10))
        }
    }

    return (
        <div>
            <div>
            <h3>useState - hook</h3>
            <div>
                {count}
            </div>
            {/*<button onClick={() => {onClickHandler("sub")}} type="button">sub - 1</button>*/}
            {/*<button onClick={() => {onClickHandler("rand")}} type="button">Random</button>*/}
            {/*<button onClick={() => {onClickHandler("add")}} type="button">add + 1</button>*/}
            </div>

            <div>
                <Button name={"Sub"} onClickHandler={() => {onClickHandler("sub")}}/>
                <Button name={"Random"} onClickHandler={() => {onClickHandler("rand")}}/>
                <Button name={"Add"} onClickHandler={() => {onClickHandler("add")}}/>
            </div>

        </div>


    )
}


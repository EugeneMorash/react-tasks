import React, {useState} from 'react';
import {Counter} from "./components/Counter";
import {Control} from "./components/Control";
import styles from "./components/Styles.module.css"


// Создать счётчик, начальное значение 0
// Есть две кнопки +1 и сброс
// Изначально кнопка сброс - disabled

// Как только нажали +1, кнопка доступна
// Как только счётчик достигнет значения 5, кнопка +1 выключается

// App10 ------
// |          |
// Counter  Control (Button)


export function App10() {
    const [count, setCount] = useState<number>(0)
    // let isMinValue = true;
    // let isMaxValue = false;
    // const addCount = () => {
    //     if (count < 5) {
    //         setCount(count + 1)
    //         isMinValue = false
    //     } else {
    //         isMaxValue = true
    //     }
    // }
    //
    // const resetCount = () => {
    //     setCount(0)
    //     isMinValue = true;
    // }

    const changeCount = (action: 'add' | 'reset') => {
        if (action === 'add') {
            setCount(count + 1);
        } else if (action === 'reset') {
            setCount(0)
        }
    }


    return (
        <div>
            <div className={styles.counter}>
                <Counter count={count}/>
            </div>
            <div className={styles.control}>
                <Control changeCount={changeCount} count={count}/>
            </div>
        </div>
    );
}




// create -> [newObj, ...arrayObj]
// read -> map (key={})
// update -> map
// delete -> filter

// filter -> filter
// sum -> reduce
// sort -> sort








































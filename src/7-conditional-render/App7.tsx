import React from 'react';
import {Rating} from "./components/Rating";


export function App7() {
    // let test = true;

    // 1. Спойлер
    // 2. Звёздный рейтинг
    // 3. Кнопка on-off (на подобии радио-кнопки)


    return (
        <div>
            {/*{test ? "111" : '222'}*/}
            {/*{test && "tags"}*/}

            {/*<Spoiler title={'Spoiler'}/>*/}
            {/*<Spoiler title={'Developer'}/>*/}


            {/*&#9733;//on*/}
            {/*&#9734;*/}

            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
            <Rating value={0}/>
        </div>
    );
}



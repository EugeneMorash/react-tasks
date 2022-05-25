import React from 'react';
import {Rating} from "./components/Rating";
import {Spoiler} from "./components/Spoiler";

export type SpoilerArrayType = Array<SpoilerType>
export type SpoilerType = {
    id: number
    item: string
    readiness: string
}

export function App7() {

    // 1. Спойлер
    // 2. Звёздный рейтинг
    // 3. Кнопка on-off (на подобии радио-кнопки)

    const frontendSpoiler = [
        {id: 111, item: 'HTML', readiness: 90},
        {id: 222, item: 'CSS', readiness: 80},
        {id: 333, item: 'JavaScript', readiness: 70},
        {id: 444, item: 'React', readiness: 30}
    ]
    const backendSpoiler = [
        {id: 112, item: '.NET', readiness: 1},
        {id: 223, item: 'Goland', readiness: 0.5},
        {id: 334, item: 'NodeJs', readiness: 5},
        {id: 445, item: 'SQL', readiness: -8}
    ]

    return (
        <div>
            {/*{test ? "111" : '222'}*/}
            {/*{test && "tags"}*/}

            {/*<Spoiler title={'Spoiler'}/>*/}
            {/*<Spoiler title={'Developer'}/>*/}

            {/*<SpoilerBody title={'Frontend Skills'} itemsArray={frontendSpoiler}/>*/}
            {/*<SpoilerBody title={'New Spoiler'} itemsArray={backendSpoiler}/>*/}

            <Spoiler title={'Frontend Spoiler'} itemsArray={frontendSpoiler}/>
            <Spoiler title={'Backend Spoiler'} itemsArray={backendSpoiler}/>

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



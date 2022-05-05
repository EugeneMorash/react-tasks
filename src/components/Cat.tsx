import React from 'react';
import {CatsArrType} from '../App';

type CatPropsType = {
    catList: CatsArrType
}


export function Cat(props: CatPropsType) {

    const catsArray = props.catList.map(
        (cat) => {
        return <li key={cat.id}>
            <div>Breed: {cat.breed}</div>
            <div>Age: {cat.age}</div>
            {cat.cahonas ? <div>Cahonas: true</div> : null}
        </li>
    })


    return (
        <ul>
            {catsArray}
        </ul>

    )
}
import React from "react";
import {SpoilerArrayType} from "../App7";


type SpoilerBodyPropsType = {
    itemsArray: SpoilerArrayType
}

export function SpoilerBody(props: SpoilerBodyPropsType) {

    const itemArray = props.itemsArray.map(
        (item) => {
            return <li key={item.id}>
                {item.item}: {item.readiness}
            </li>
        }
    )

    return (
        <div>
            <ul>
                {itemArray}
            </ul>
        </div>
    )
}
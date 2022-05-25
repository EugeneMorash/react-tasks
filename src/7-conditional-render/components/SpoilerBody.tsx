import React from "react";
import {SpoilerArrayType} from "../App7";


type SpoilerBodyPropsType = {
    itemsArray: SpoilerArrayType
}

export function SpoilerBody(props: SpoilerBodyPropsType) {

    const skillArray = props.itemsArray.map(
        (skill) => {
            return <li key={skill.id}>
                {skill.item}: {skill.readiness}
            </li>
        }
    )

    return (
        <div>
            <ul>
                {skillArray}
            </ul>
        </div>
    )
}
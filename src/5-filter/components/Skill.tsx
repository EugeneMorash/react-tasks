import React from "react";

type SkillPropsType = {
    title: string
    isDone: boolean
}

export function Skill(props: SkillPropsType) {

    return (
        <li>
            {props.title}: <input type="checkbox" checked={props.isDone}/>
        </li>
    )
}
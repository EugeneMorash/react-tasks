import React from "react";
import {Button} from "./Button";

type SkillPropsType = {
    title: string
    isDone: boolean
    deleteSkillHandler: () => void
}

export function Skill(props: SkillPropsType) {

    return (
        <li>
            {props.title}, {props.isDone}
            <Button name={'Delete'} callbackHandler={props.deleteSkillHandler} />
        </li>
    )
}
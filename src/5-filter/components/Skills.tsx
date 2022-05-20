import React, {useState} from 'react';
import {SkillsArrayType} from "../App5";
import {Button} from "./Button";
import {Skill} from "./Skill";

export type SkillsPropsType = {
    skill: SkillsArrayType
    deleteSkillHandler: (_token: string) => void

}
type FilterNameType = 'all' | 'done' | 'notDone'

export function Skills(props: SkillsPropsType) {

    const [filter, setFilter] = useState('all')
    let skillArray = props.skill
    if (filter === 'done') {
        skillArray = props.skill.filter(value => value.isDone)
    }
    if (filter === 'notDone') {
        skillArray = props.skill.filter(value => !value.isDone)
    }

    function callbackHandler(filterName: FilterNameType) {
        setFilter(filterName)
    }


    const skillList = skillArray.map((obj) => {
        return (
            <Skill key={obj._token}
                   title={obj.title}
                   isDone={obj.isDone}
                   deleteSkillHandler = {() => props.deleteSkillHandler(obj._token)}
            />
        )
    })

    return (
        <div>
            <h3>Сортировка навыков</h3>
            <ul>
                {skillList}
            </ul>
            <div>
                <Button name={'All'} callbackHandler={() => callbackHandler('all')}/>
                <Button name={'Done'} callbackHandler={() => callbackHandler('done')}/>
                <Button name={'Not done'} callbackHandler={() => callbackHandler('notDone')}/>
            </div>
        </div>
    );
}

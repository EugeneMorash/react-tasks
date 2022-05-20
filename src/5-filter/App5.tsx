import React, {useState} from 'react';
import {Users} from "./components/Users";
import {Skills} from "./components/Skills";

export type UserArrayType = Array<UserType>
export type UserType = {
    id: number
    name: string
    age: number
}

export type SkillsArrayType = Array<SkillsType>
export type SkillsType = {
    _token: string
    title: string
    isDone: boolean
}



const skills: SkillsArrayType = [
    {_token: 'abc-1312', title: 'HTML', isDone: true},
    {_token: 'abc-1315', title: 'CSS', isDone: false},
    {_token: 'abc-1432', title: 'JS', isDone: true},
    {_token: 'abc-1423', title: 'ReactTS', isDone: false},
    {_token: 'abc-1756', title: 'NodeJS', isDone: false},
    {_token: 'abc-1758', title: 'Python', isDone: false},
]

const users: UserArrayType = [
    {id: 1, name: "James", age: 8},
    {id: 2, name: "Robert", age: 18},
    {id: 3, name: "John", age: 28},
    {id: 4, name: "Michael", age: 38},
    {id: 5, name: "William", age: 48},
    {id: 6, name: "David", age: 58},
    {id: 7, name: "Richard", age: 68},
    {id: 8, name: "Joseph", age: 78},
    {id: 9, name: "Thomas", age: 88},
    {id: 10, name: "Charles", age: 98},
    {id: 11, name: "Christopher", age: 100}
]


export function App5() {

    const [user, setUser] = useState<UserArrayType>(users)
    const [skill, setSkill] = useState<SkillsArrayType>(skills)

    const deleteUserHandler = (id: number) => {
      setUser(user.filter(userName => userName.id !== id))
    }

    const deleteSkillHandler = (_token: string) => {
        setSkill(skill.filter(skillName => skillName._token !== _token))
    }

    return (
        <div>
            <Users user={user} deleteUserHandler={deleteUserHandler} />
            <Skills skill={skill} deleteSkillHandler={deleteSkillHandler}/>
        </div>
    )
}


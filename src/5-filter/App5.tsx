import React, {useState} from 'react';
import {User} from "./components/User";
import {Skill} from "./components/Skill";
import {Button} from "./components/Button";
import {Users} from "./components/Users";

export type UserArrayType = Array<UserType>
export type UserType = {
    id: number
    name: string
    age: number
}

type SkillsArrayType = Array<SkillsType>
type SkillsType = {
    _token: string
    title: string
    isDone: boolean
}

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

const skills: SkillsArrayType = [
    {_token: 'abc-1312', title: 'HTML', isDone: true},
    {_token: 'abc-1315', title: 'CSS', isDone: false},
    {_token: 'abc-1432', title: 'JS', isDone: true},
    {_token: 'abc-1423', title: 'ReactTS', isDone: false},
    {_token: 'abc-1756', title: 'NodeJS', isDone: false},
    {_token: 'abc-1758', title: 'Python', isDone: false},
]

// 1. Создать компоненту User (name & age)
// 1.5/ Передать данные из массива в компоненты User

// 2. Создать универсальную компоненту кнопка
// 3. C помощью двух кнопок сделать фильтрацию людей старше 50 и младше 50

export type FilterNameType = 'all' | 'less' | 'more';

export function App5() {

    // const [filter, setFilter] = useState('all');
    //
    // let userArray = users;
    // if (filter === 'less') {
    //     userArray = users.filter(value => value.age < 50)
    // }
    // if (filter === 'more') {
    //     userArray = users.filter(value => value.age >= 50)
    // }
    //
    // const userList = userArray.map((obj) => {
    //     return (
    //         <User key={obj.id} name={obj.name} age={obj.age}/>
    //     )
    // });


    const skillList = skills.map((obj) => {
        return (
            <Skill key={obj._token} title={obj.title} isDone={obj.isDone}/>
        )
    })

    // function callbackHandler(filterName: FilterNameType) {
    //     // console.log(filterName)
    //     setFilter(filterName);
    // }

    return (
        <div>
            <Users users={users}/>
            <div>
                <h3>Сортировка навыков</h3>
                <ul>
                    {skillList}
                </ul>
                <div>

                </div>
            </div>
        </div>
    )
}


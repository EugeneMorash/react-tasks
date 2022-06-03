import React, {useState} from 'react';
import {User} from "./components/User";
import {Button} from "./components/Button";

type PeopleArrayType = Array<UserType>
type UserType = {
    id: number
    name: string
    age: number
}

export type FilterNameType = 'all' | 'less' | 'more';

// Удаление пользователя:

export function App6() {

    const [filter, setFilter] = useState<FilterNameType>('all');

    const [people, setPeople] = useState<PeopleArrayType>([
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
    ]);

    let userArray = people;
    if (filter === 'less') {
        userArray = people.filter(value => value.age < 50)
    }
    if (filter === 'more') {
        userArray = people.filter(value => value.age >= 50)
    }

    const deleteUserHandler = (id: number) => {
        setPeople(people.filter((p) => p.id !== id));
    }



    const userList = userArray.map((obj) => {
        return (
            <User key={obj.id} name={obj.name} age={obj.age} deleteUserHandler={() => {deleteUserHandler(obj.id)}}/>
        )
    });

    function callbackHandler(filterName: FilterNameType) {
        setFilter(filterName);
    }


    return (
        <div>

            <h3>Сортировка пользователей</h3>
            <ul>
                {userList}
            </ul>
            <div>
                <Button name={"Less 50"} callbackHandler={() => {
                    callbackHandler('less')
                }}/>
                <Button name={"All"} callbackHandler={() => {
                    callbackHandler('all')
                }}/>
                <Button name={"More 50"} callbackHandler={() => {
                    callbackHandler('more')
                }}/>
            </div>

        </div>
    )
}


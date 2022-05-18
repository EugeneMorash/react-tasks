import React, {useState} from "react";
import {Button} from "./Button";
import {User} from "./User";
import {FilterNameType, UserArrayType} from "../App5";



type UsersPropsType = {
    users: UserArrayType
}

export function Users(props: UsersPropsType) {

    const [filter, setFilter] = useState('all');

    let userArray = props.users;
    if (filter === 'less') {
        userArray = props.users.filter(value => value.age < 50)
    }
    if (filter === 'more') {
        userArray = props.users.filter(value => value.age >= 50)
    }

    const userList = userArray.map((obj) => {
        return (
            <User key={obj.id} name={obj.name} age={obj.age}/>
        )
    });

    function callbackHandler(filterName: FilterNameType) {
        // console.log(filterName)
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
import React, {useState} from "react";
import {Button} from "./Button";
import {User} from "./User";
import {UserArrayType} from "../App5";



type UsersPropsType = {
    user: UserArrayType
    deleteUserHandler: (id: number) => void
}
type FilterNameType = 'all' | 'less' | 'more';

export function Users(props: UsersPropsType) {

    const [filter, setFilter] = useState('all');

    let userArray = props.user;
    if (filter === 'less') {
        userArray = props.user.filter(value => value.age < 50)
    }
    if (filter === 'more') {
        userArray = props.user.filter(value => value.age >= 50)
    }


    const userList = userArray.map((obj) => {
        return (
            <User key={obj.id} name={obj.name} age={obj.age} deleteUserHandler={() => {props.deleteUserHandler(obj.id)}}/>
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
import React from 'react';
import {User} from "./User";
import {UsersArrType} from "../App";

type MainPropsType = {
    userList: UsersArrType
}


export function Main(props: MainPropsType) {

    const userArray = props.userList.map((person) => {
        return <User key={person.id} name={person.name} age={person.age}/>
    });

    return (
        <main>
            Body
            <ul>
                {userArray}

                {/*<User name={props.userList[0].name} age={props.userList[0].age}/>*/}
                {/*<User name={props.userList[1].name} age={props.userList[1].age}/>*/}
                {/*<User name={props.userList[2].name} age={props.userList[2].age}/>*/}

            </ul>
        </main>
    )
}
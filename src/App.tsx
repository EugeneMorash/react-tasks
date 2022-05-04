import React from 'react';
import './App.css';
import {Header} from "./components/Header";
import {Main} from "./components/Main";
import {Footer} from "./components/Footer";
import {Aside} from "./components/Aside";


export type UsersArrType = Array<UserType>
export type UserType = {
    id: number
    name: string
    age: number
}

export type TopCarsArrType = Array<TopCarsType>
export type TopCarsType = {
    id: number
    manufacturer: string
    model: string
}

const users: UsersArrType = [
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
    {id: 11, name: "Christopher", age: 100},
]

const topCars: TopCarsArrType = [
    {id: 1, manufacturer: "BMW", model: 'm5cs'},
    {id: 2, manufacturer: "Mercedes", model: 'e63s'},
    {id: 3, manufacturer: "Audi", model: 'rs6'}
]


function App() {
    return (
        <div>
            <Header title={"Header top"} text={"www"}/>
            <Header title={"Header center"} text={"qqq"}/>
            <Header title={"Header bottom"}/>

            <Main userList={users}/>

            <Aside advertising={"Advertising"}/>

            <Footer carsList={topCars}/>
        </div>
    );
}

export default App;



// ======= react-tasks =======
//
// **** создание вложенных компонент ****
// 1. Сделать компоненты
// Footer и Aside
//
// 2. Сделать возможно изменять содержимое тега Footer и Aside через пропс
//
// 3. Типизировать
//
//
// **** map ****
// 1. В react-tasks в App создать массив
// const topCars = [
//     {id: 1, manufacturer: "BMW", model: 'm5cs'},
//     {id: 2, manufacturer: "Mercedes", model: 'e63s'},
//     {id: 3, manufacturer: "Audi", model: 'rs6'}
// ]
//
// 2. Вывести массив машин в компоненте Footer через map в html Таблицу (!гуглить по-английски! (Учимся))
//
// 3. Ошибок в консоли не должно быть и всё должно быть типизировано



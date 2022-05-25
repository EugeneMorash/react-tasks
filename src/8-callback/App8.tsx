import React from 'react';
import {Body} from "./components/Body";


export function App8() {

    const test: number = 10;

    const showTest = () => {
        console.log(test)
    }

    return (
        <Body showTest={showTest}/>
    );
}

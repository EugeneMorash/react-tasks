import React, {useState} from 'react';
import {Body} from "./components/Body";


export function App8() {

    const [test, setTest] = useState(10)

    const showTest = () => {
        setTest(test + 1)
        // console.log(test)
    }

    return (
        <Body showTest={showTest}/>
    );
}

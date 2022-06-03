import React, {useState} from "react";
import {SpoilerArrayType} from "../App7";
import {SpoilerBody} from "./SpoilerBody";
// import {CSSTransition} from "react-transition-group";


type SpoilerPropsType = {
    // isCollapsed: boolean
    title: string
    itemsArray: SpoilerArrayType
}

export function Spoiler(props: SpoilerPropsType) {

    const [isCollapsed, setIsCollapsed] = useState<boolean>(true)

    const onClickHandler = () => {
        setIsCollapsed(!isCollapsed)
    }

    return (
        <div>
            <h3 onClick={onClickHandler}>{props.title}</h3>

            {!isCollapsed && <SpoilerBody itemsArray={props.itemsArray}/>}
            {/* конструкция if */}

            {/*{!isCollapsed ? <SpoilerBody itemsArray={props.itemsArray}/> : ""}*/}
            {/* конструкция if/else */}

            {/*<CSSTransition in={!isCollapsed} timeout={300} classNames='alert' unmountOnExit>*/}
            {/*    <SpoilerBody itemsArray={props.itemsArray}/>*/}
            {/*</CSSTransition>*/}
        </div>

    )
}

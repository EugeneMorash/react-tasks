import React, {useState} from "react";

type SpoilerPropsType = {
    // isCollapsed: boolean
    title: string
}

export function Spoiler(props: SpoilerPropsType) {

    const [isCollapsed, setIsCollapsed] = useState<boolean>(true)

    const onClickHandler = () => {
        setIsCollapsed(!isCollapsed)
    }

    return (
        <div>
            <h3 onClick={onClickHandler}>{props.title}</h3>
            {!isCollapsed && <SpoilerBody/>}
        </div>
    )
}

function SpoilerBody() {
    return (
        <div>
            <ul>
                <li>React</li>
                <li>Redux</li>
                <li>Axios</li>
            </ul>
        </div>
    )
}

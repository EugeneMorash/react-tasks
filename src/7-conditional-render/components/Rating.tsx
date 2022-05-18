import React, {useState} from "react";

type StarValue = 0 | 1 | 2 | 3 | 4 | 5;

type RatingPropsType = {
    value: StarValue
}

export function Rating(props: RatingPropsType) {

    const [stars, setStars] = useState<StarValue>(props.value)

    const changeStars = (countStars: StarValue) => {
        setStars(countStars);
    }

    const resetOnclickHandler = () => {
        setStars(0);
    }

    return (
        <div>
            <Star selected={stars > 0} changeStars={() => changeStars(1)}/>
            <Star selected={stars > 1} changeStars={() => changeStars(2)}/>
            <Star selected={stars > 2} changeStars={() => changeStars(3)}/>
            <Star selected={stars > 3} changeStars={() => changeStars(4)}/>
            <Star selected={stars > 4} changeStars={() => changeStars(5)}/>

            <button onClick={resetOnclickHandler}>Reset</button>
        </div>
    )
}


type StarPropsType = {
    selected: boolean
    changeStars: () => void
}

function Star(props: StarPropsType) {
    const starOnClickHandler = () => {
        props.changeStars()
    }

    const style = {
        color: "gold",
        fontSize: "20px"
    }

    return (
        <span onClick={starOnClickHandler} style={style}>
            {props.selected ? <span>&#9733;</span> : <span>&#9734;</span>}
        </span>
    )
}
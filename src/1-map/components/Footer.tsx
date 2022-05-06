import React from 'react';
import {TopCarsArrType} from "../App1";


type FooterPropsType = {
    carsList: TopCarsArrType
}

export function Footer(props: FooterPropsType) {

    const topCarsArray = props.carsList.map(
        (car) => {
            return (
                <tr key={car.id}>
                    <td>{car.manufacturer}</td>
                    <td>{car.model}</td>
                </tr>
            );
        }
    )
// console.log(topCarsArray)
    return (
        <footer>
            <table>
                <thead>
                <tr>
                    <td><b>Manufacturer</b></td>
                    <td><b>Model</b></td>
                </tr>
                </thead>
                <tbody>
                {topCarsArray}
                </tbody>
            </table>
        </footer>
    )
}
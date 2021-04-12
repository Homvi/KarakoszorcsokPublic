import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button, Divider } from '@material-ui/core';
import img1 from "../img/9BBE9FBC-05B9-410B-B32F-DF96E47F76CD.jpg"
import img2 from "../img/81B7BC74-CBF4-4C86-AA62-AE2C38902566.jpg"
import "./carousel.css";

function Example() {
    var items = [
        {
            src: img1,
            description: "Probably the most random thing you have ever seen!"
        },
        {
            src: img2,
            description: "Probably the most random thing you have ever seen!"
        },
    ]

    return (
        <Carousel height="500px" autoPlay={true} >
            {
                items.map((item, i) => <Item key={i} item={item} />)
            }
        </Carousel>
    )
}

function Item(props) {
    return (
        <>
            {props.item.src ? <img src={props.item.src} ></img> : <div className="element" height="500px">div</div>}
        </>


    )
}
export default Example;
//export default Item;
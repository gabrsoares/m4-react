import React from "react";
import "./Card.css"

const Card = (props) => {
    return (
        <div className="card" >
            <div className="content">{props.children}</div>
            <p>{props.text}</p>
            <p>{props.date}</p>
            <p>{props.hour}</p>
        </div>
    )
}

export default Card;
import React from "react";
import "./Card.css"

class CardClass extends React.Component {
    render(){
        return <>
        <div className="card">
            <p>{this.props.textClass}</p>
            <p>{this.props.dateClass}</p>
            <p>{this.props.hourClass}</p>
        </div>
        </>
    }
}
export default CardClass;

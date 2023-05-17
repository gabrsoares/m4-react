import React from "react";
import "./Card.css"

class CardEnter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "",
            date: "",
            hour: ""
        }
    }

    inserirConteudo() {
        this.setState({
            text: "Hello World",
            date: new Date().toLocaleDateString('pt-BR'),
            hour: new Date().toLocaleTimeString('pt-BR')
        })
    }

    removerConteudo() {
        this.setState({
            text:"",
            date:"",
            hour:""
        })
    }

    render(){
        return (
            <div className="card" onMouseEnter={()=> this.inserirConteudo()} 
            onMouseLeave={()=> this.removerConteudo()}>
                <p>Passe o mouse aqui</p>
                <p>{this.state.text}</p>
                <p>{this.state.date}</p>
                <p>{this.state.hour}</p>
            </div>
        )
    }
}

export default CardEnter;
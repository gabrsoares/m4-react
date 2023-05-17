import React from 'react';
import "./Card.css"

class CardClick extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      texto: "",
      data: "",
      hora: ""
    };
  }

  inserirConteudo() {
    this.setState({ 
        texto: "Hello World",
        data: new Date().toLocaleDateString('pt-BR'),
        hora: new Date().toLocaleTimeString('pt-BR')
 });
  }

  render() {
    return (
      <div className='card'>
        <p>{this.state.texto}</p>
        <p>{this.state.data}</p>
        <p>{this.state.hora}</p>
        <button onClick={() => this.inserirConteudo()}>Clique aqui</button>
      </div>
    );
  }
}

export default CardClick;
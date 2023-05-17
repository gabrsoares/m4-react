import React from 'react';
import "./Card.css"

class CardStyle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        isClicked: false,
        styles: {
            fontSize: '0.5rem',
        }
    };
  }
  inserirConteudo() {
    this.setState((prevState)=> ({ //o parametro precisa ser inserido para o isClicked ser atribuido (nao entendi pq)
        isClicked: !prevState.isClicked,
        styles: {
            fontSize: prevState.isClicked? '0.5rem' : '1.4rem'
        }
    }));
  }

  render() {
    return (
      <div className='card' style={this.state.styles}>
        <p>Hello World</p>
        <p>{new Date().toLocaleDateString('pt-BR')}</p>
        <p>{new Date().toLocaleTimeString('pt-BR')}</p>
        <button onClick={() => this.inserirConteudo()}>Clique aqui</button>
      </div>
    );
  }
}

export default CardStyle;
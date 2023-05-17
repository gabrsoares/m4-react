import React from 'react';
import './App.css'
import Card from './components/Card/Card';
import CardClass from './components/Card/CardClass';
import CardClick from './components/Card/CardClick';
import CardEnter from './components/Card/CardEnter';
import CardStyle from './components/Card/CardStyle';

function App() {
  const data = new Date()
  const Calendario = data.toLocaleDateString('pt-BR')
  const Horas = data.toLocaleTimeString('pt-BR')

  const ObjetosData = {
    texto: "Hello World",
    data: Calendario,
    hora: Horas
  }

  return (
    <div className="App">
      <Card text = "Hello World" date={Calendario} hour={Horas}/>
      <Card>
        <p>Hello World</p>
        <p>{Calendario}</p>
        <p>{Horas}</p>
      </Card>
      <Card> {ObjetosData.texto} <br/> {ObjetosData.data} <br/> {ObjetosData.hora} </Card>
      <Card text = "Hello World" date={Calendario} hour={Horas}>Passe o mouse aqui</Card>
      <CardClass textClass= "Hello World" dateClass={Calendario} hourClass={Horas} /> 
      <CardClick/>
      <CardEnter/>
      <Card text = "Hello World" date={Calendario} hour={Horas}>Passe o mouse aqui</Card>
      <CardStyle/>
      <Card text = "Hello World" date={Calendario} hour={Horas}/>
    </div>
  );

  

}



export default App;

import React from 'react';
import './App.css';

/*function Helloworld(props){
  console.log(props);
  return(
    <div id="hello">
      <h3>{props.subtitle}</h3>
      {props.myText}
    </div>
  );
}*/

/*Estamos reescribiendo la función de varias formas(3 maneras). Componentes.*/
/*Ambas funciones son equivalentes depende setu criterio*/
/*
  const App = () => <div>This is my component: <Helloworld/> </div>
*/
/*
class App extends React.Component {
  render() {
    return <div> This is my component <Helloworld/> </div>
  }
}*/

class Helloworld extends React.Component {

  state = {
    show: true
  }

  /*toggleShow(){
    this.setState({show: false});
  }*/

  toggleShow = () =>{
    this.setState({show: !this.state.show});
  }

  render() {
    if(this.state.show) {
      /* Para acceder al props es a partir de un THIS */
      /*<button onClick={()=> this.setState({show: false})}>*/
      /*<button onClick={this.toggleShow.bind(this)}>*/
      return (
      <div id="hello">
        <h3>
          {this.props.subtitle}
        </h3>
        {this.props.myText}
        <button onClick={this.toggleShow}>
          Cambiar estado
        </button>
      </div>
      )
    } else {
      return <h1>
        No hay elementos
        <button onClick={this.toggleShow}>
          Cambiar estado
        </button>
      </h1>
    }
  }
}

function App() {
  return (
    <div>This is my component: 
      <Helloworld myText="Hola Mundo 1" subtitle="Loremp ispum 1"/>
      <Helloworld myText="Hola Mundo 2" subtitle="Loremp ispum 2"/>
      <Helloworld myText="Hola Mundo 3" subtitle="Loremp ispum 3"/>
    </div>
  );
}

export default App;
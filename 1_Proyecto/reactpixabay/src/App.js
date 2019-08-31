import React from 'react';
import './App.css';

function Helloworld(props){
  console.log(props);
  return(
    <div id="hello">
      <h3>{props.subtitle}</h3>
      {props.myText}
    </div>
  );
}

/*Estamos reescribiendo la función*/
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

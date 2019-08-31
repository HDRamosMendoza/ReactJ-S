import React from 'react';
import './App.css';

function Helloworld(){
  return(
    <div id="hello">Hello world</div>
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
    <div>This is my component: <Helloworld/> </div>
  );
}

export default App;

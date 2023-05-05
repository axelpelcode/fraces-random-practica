import React from 'react';
import './App.css';
import Boton from './componentes/Boton';

function clickSiguienteFrace(){
  console.log("click Nueva frace-ok");
}

function clickTwittear(){
  console.log("click Twittear funciona-ok");
}

function App() {
  return (
    <div className="App" id="quote-box">
      <Boton 
        nombreBoton="Nueva frace" 
        clickEfecto={clickSiguienteFrace} 
      />
      <Boton 
        nombreBoton="Twittear" 
        clickEfecto={clickTwittear} 
      />
    </div>
  )
}

export default App;

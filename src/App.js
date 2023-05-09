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

    <div className="App">
      <div>
        <h1>Fraces random</h1>
      </div>
      <div id="quote-box">
        <Boton 
          nombreBoton="Nueva frace" 
          clickEfecto={clickSiguienteFrace} 
        />
        <Boton 
          nombreBoton="Twittear" 
          clickEfecto={clickTwittear} 
        />
      </div>
    </div>
  )
}

export default App;

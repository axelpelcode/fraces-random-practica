import React from 'react';
import { useState } from 'react';
import './App.css';
import Boton from './componentes/Boton';
import FraceDisplay from './componentes/FraceDisplay';
import Fraces from './Objeto/Fraces';

function App() {

  const [num, setNum] = useState(0);

  const Randomer = (max) => Math.floor(Math.random() * max);

  const clickSiguienteFrace = () => {
   setNum(
    (num * 0) + Randomer(26)
    )
    console.log(num);
  }

  const clickTwittear = () => {
   console.log("click Twittear funciona-ok");
  }
  return (

    <div className="App">
      <div>
        <h1>Fraces random</h1>
      </div>
      <div id="quote-box">
        < FraceDisplay 
          fraceSelect={Fraces[num]}
        /> 
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

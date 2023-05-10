import React from 'react';
import { useState } from 'react';
import './App.css';
import Boton from './componentes/Boton';
import FraceDisplay from './componentes/FraceDisplay';
import Fraces from './Objeto/Fraces';
import logo from './img/frp-logo.png'

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
   console.log("Twittear frace");
  }
  return (

    <div className="App" >
      <div className="container-fluid">
        <div className="row">
            <div className="row">
              <div className="col-md-4" />
              <h1 className="text-primary text-center col-md-3">Fraces random</h1>
            <img 
              className="img-responsive col-md-1"
              src={logo} 
              title="Fraces random para twittear"
              alt="Preciona 'Nueva frace' para generar una frace aleatoria
               o 'Twittear' para publicalra."
            />
            <div className="col-md-4" />
            </div>
        </div>  
          <div id="quote-box" className="row" >
            <div className="col-xl-2" />
            <div className="col-xl-8">
            < FraceDisplay 
              fraceSelect={Fraces[num]}
            /> 
            </div>
            <div className="col-xl-2" />
            <div>
            <Boton 
              clase="btn btn-primary"
              idBoton="new-quote"
              nombreBoton="Nueva frace" 
              clickEfecto={clickSiguienteFrace} 
            />
            </div>
            <div>
            <Boton 
              clase="btn btn-default"
              idBoton="tweet"
              nombreBoton= {<a 
                id="tweet-quote"
                href={`http://twitter.com/intent/tweet?text="${Fraces[num][0]}" - ${Fraces[num][1]}`} 
                target="_blank"
                >
                Twittear <i class="fab fa-twitter" />
                </a>} 
              clickEfecto={clickTwittear} 
            />
            </div>
          </div>
          
        <div>
          <footer id="footer">
            <a id="contacto" href="https://github.com/axelpelcode">
              app creada por AxelPelCode
            </a>
          </footer>
        </div>
      </div>
    </div>
  )
}

export default App;

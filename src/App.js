import React, {Component} from 'react';
import './App.css';
import Boton from './componentes/Boton';

class App extends Component() {
  clickSiguienteFrace(){
    console.log("click Siguiente Frace funciona-ok");
  }
  clickTwittear(){
    console.log("click Twittear funciona-ok");
  }
  
  render (){
    return (  
      <div className="App" id="quote-box">
        <Boton nombreBoton="Nueva Frace" clickEfecto={this.clickSiguienteFrace} />
        <Boton nombreBoton="Twittear" clickEfecto={this.clickTwittear} />
      </div>
    );
  }
}

export default App;

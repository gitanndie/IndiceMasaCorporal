import React, { Component } from 'react';
import CalculadoraApp from './componentes/seccion3/CalculadoraApp'
import DetalleIMCApp from './componentes/seccion2/CabeceraIMCApp'
	
class App extends Component {
	constructor(props){
    super(props);
    this.state = {
      imc : 0
    }
  }
  render() {
    return (
      <div>
        <CalculadoraApp App = {this}/>
        <DetalleIMCApp
        nombre = "Andrea" 
        apellido = "González" 
        edad = {30} 
        App = {this}/>
      </div>
    );
  }
}

export default App;
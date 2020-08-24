import React, { Component } from 'react';
import CalculadoraApp from './componentes/seccion3/CalculadoraApp'
import DetalleImcApp from './componentes/seccion2/DetalleImcApp'
	
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
        <DetalleImcApp nombre = "oscar" apellido = "mesa" edad = {29} App = {this}/>
      </div>
    );
  }
}

export default App;
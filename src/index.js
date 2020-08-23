import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bulma/css/bulma.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'
import * as serviceWorker from './serviceWorker';
import Componente1 from './componentes/seccion1/CalculadoraApp';
import Compononente2 from './componentes/seccion2/DetalleImcApp'


ReactDOM.render(
  <React.StrictMode>
    <Componente1 />
    <Compononente2 
    nombre="andrea" 
    apellido="gonzalez"
    edad= {30} />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();

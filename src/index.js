import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bulma/css/bulma.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'
import * as serviceWorker from './serviceWorker';
import CalculadoraApp from './componentes/seccion1/CalculadoraApp';

ReactDOM.render(
  <React.StrictMode>
    <CalculadoraApp />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();

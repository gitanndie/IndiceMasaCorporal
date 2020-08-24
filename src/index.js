import React from 'react';
import ReactDOM from 'react-dom';
import 'bulma/css/bulma.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './index.css';
import App from './App'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <React.StrictMode>
      <App/>
    </React.StrictMode>,
    document.getElementById('root')
  );

serviceWorker.unregister();
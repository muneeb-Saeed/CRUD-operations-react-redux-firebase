import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter}  from 'react-router-dom'
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './components/reducers/index';

ReactDOM.render(
  
    <Provider store={store}> 
        <BrowserRouter>
          <App />
        </BrowserRouter>
    </Provider > ,
    document.getElementById('root')
)
reportWebVitals();

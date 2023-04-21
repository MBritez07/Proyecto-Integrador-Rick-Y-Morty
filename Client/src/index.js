import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Redux/store';


ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
  <App />
  </BrowserRouter>
  </Provider>,
  
  document.getElementById('root')
)
// importa import {BrowserRouter} from 'react-router-dom';
// y luego envolvemos app para ocupar rutas 
//
  //$ npx create-react-app routing
  //$ npm i react-router-dom@6.3.0
  //$ npm i redux@4.0.5 react-redux redux-thunk
  // npm start  
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter} from 'react-router-dom';
import store from './redux/store';
import { Provider } from 'react-redux';
import "react-alice-carousel/lib/alice-carousel.css";
import CryptoContext from './CryptoContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}> 
  <CryptoContext>
    <BrowserRouter> 
      <App />
    </BrowserRouter>
    </CryptoContext>
  </Provider>
);

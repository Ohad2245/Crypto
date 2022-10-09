import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter} from 'react-router-dom';
import store from './redux/store';
import { Provider } from 'react-redux';
import "react-alice-carousel/lib/alice-carousel.css";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  /* הפרוביידר נמצא מעל כי הוא עוטף את כל האפליקצייה כדי שנרצה שלכולם תהא גישה*/
  <Provider store={store}> 
    <BrowserRouter> 
      <App />
    </BrowserRouter>
  </Provider>
);

reportWebVitals();

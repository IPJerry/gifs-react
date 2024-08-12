import React from 'react';
import ReactDOM from 'react-dom/client';
import { GifExpertApp } from './GifExpertApp';
import './styles.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  //ayuda a que todo funcione como se espera
  <React.StrictMode> 
    <GifExpertApp />
  </React.StrictMode>,
)

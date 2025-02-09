import React from 'react'
import { BrowserRouter, Router, Route } from "react-router-dom";
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </ BrowserRouter>
  </React.StrictMode>,
)

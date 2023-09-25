import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Accueil from './pages/Accueil';
import Logement from './pages/Logement'
import APropos from './pages/Apropos';
import Header from './components/header/Header';
import Footer from './components/footer/Footer'
import Error from './pages/ErrorPage';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Accueil/>}/>
        <Route path="/A_Propos" element={<APropos/>}/>
        <Route path="/location/:id" element={<Logement/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
      <Footer/>
    </Router>
  </React.StrictMode>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

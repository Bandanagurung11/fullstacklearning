import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from "react-router";

import Service from './pages/Service';
import Pricing from './pages/Pricing';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import About from './pages/About';
import ScrollThrough from './components/ScrollThrough';
// import Footer2 from './components/Footer2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    {/* <App /> */}
    <Navbar/>
    <ScrollThrough/>

    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/About" element={<About />} />
      <Route path="/Service" element={<
      Service />} />
      <Route path="/Pricing" element={<Pricing />} />
      <Route path="/Login" element={<Login />} />

    </Routes>
    <Footer/>
    {/* <Footer2/> */}
  </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

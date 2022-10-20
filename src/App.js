import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home'

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element= {<Home />}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

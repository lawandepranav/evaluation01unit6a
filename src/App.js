import React from 'react';
import Navbar from './Components/Navbar';
import Appointment from './Components/Appointment';
import Login from './Components/Login';
import Home from './Components/Home'
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Navbar/>
      
      <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/appointment" element={<Appointment />}></Route>
      </Routes>


    </div>
  );
}

export default App;

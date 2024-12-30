import { useState } from 'react'
import { BrowserRouter, Routes, Route,} from "react-router-dom";
import Dashboard from './Components/Dashboard';
import Login from './Components/Login';
import Register from './Components/Register';
import './App.css'

function App() {
  
  return (
    <>
    
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>

      
    </Routes>
    </BrowserRouter>
     
     
    </>
  )
}

export default App

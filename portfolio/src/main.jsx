import React from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Projects from './components/Projects'
import './index.css'
import App from './App.jsx'

const theme1 = "/theme1.jpg";
const theme2 = "/theme2.jpg";
const theme3 = "/theme3.jpg";
const tipcalc = "/tipcalc.jpg";
createRoot(document.getElementById('root')).render(
  <Router>
  <Routes >
    <Route path="/" element={<App />} />
    <Route path="/projects" element={<Projects theme1={theme1}  theme2={theme2} theme3={theme3} tipcalc={tipcalc}/>} />
   
     </Routes>
  </Router>
)

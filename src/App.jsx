import { useState } from 'react'

import './App.css'
import Nav from './assets/Components/Nav'
import Home from './assets/Components/Home'
import About from './assets/Components/About'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
    <Nav />
    <Routes>
      <Route path='/' Component={Home}/>
      <Route path='/about' Component={About}/>

      
      </Routes>
      </BrowserRouter>
  )
}
export default App
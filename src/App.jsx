import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Info  from './components/Info'
import About from './components/About'
import Interests from './components/Interests'

function App() {

  return (
    <>
      <Info />
      <About />
      <Interests />
    </>
  )
}

export default App
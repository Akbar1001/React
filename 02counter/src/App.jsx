import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
  let counter=0

  const addvalue=()=>{
      counter++;
      console.log("Value increemented ",Math.random()*10);
  }
  const reducevalue=()=>{
      counter++;
      console.log("Value Decreemented ",Math.random()*10);
  }
  return (
    <>
      <h2>My 2nd React project</h2>
      <h3> Counter : {counter}</h3>

      <button onClick={addvalue}>Increement</button>
      <button onClick={reducevalue}>Decreement</button>
    </>
  )
}

export default App

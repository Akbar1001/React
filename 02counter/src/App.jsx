import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//Hooks are used for UI Updation


function App() {
 
  //let counter=0

  let [counter , setCounter ]= useState(15)
  const addvalue=()=>{

      console.log("Value increemented ",Math.random()*10);
      //counter=counter+1
      //setCounter(counter+1)

      if(counter<20)
        setCounter(counter+1);
  }
  const reducevalue=()=>{
  
      console.log("Value Decreemented ",Math.random()*10);
      //setCounter(counter-1);
      if(counter>0)
       setCounter(counter-1);

      //setcounter(counter);
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

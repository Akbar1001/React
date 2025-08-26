import { useState } from 'react'

import './App.css'

function App() {
  const [count, setColor] = useState("olive")

  return (
      <div className="w-full h-screen duration-200"
      style={{backgroundColor:color}}
      >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">test
          <button
          onClick={()=> setColor("Red")}
          className="outline-none px-4 py-1
          rounded-full text-white shadow-lg"
          style={{backgroundColor:"red"}}
          >Red</button>

          <button
          className="outline-none px-4 py-1
          rounded-full text-white shadow-lg"
          style={{backgroundColor:"green"}}
          >Green</button>

          <button
          className="outline-none px-4 py-1
          rounded-full text-white shadow-lg"
          style={{backgroundColor:"Blue"}}
          >Blue</button>

          <button
          className="outline-none px-4 py-1
          rounded-full text-white shadow-lg"
          style={{backgroundColor:"Black"}}
          >Black</button>
        </div>
      </div>
      </div>
  )
}

export default App

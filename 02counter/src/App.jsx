import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// All about hooks

function App() {

  // useState is responsible for changing the state
  let [counter,setCounter] = useState(15)

  //let counter=15

  const addvalue=()=>{
    // console.log('clicked',counter);
    if(counter < 20)
    {
      // counter=counter+1;
      setCounter(prevCounter => prevCounter + 1)
      setCounter(prevCounter => prevCounter + 1 )
      setCounter(prevCounter => prevCounter + 1)
      setCounter(prevCounter => prevCounter + 1)
    }
  }

  const removevalue=()=>{
    if(counter > 0)
    {
      counter=counter-1;
      setCounter(counter);
    }
  }
  return (
    <>
      <h1>Chai aur React</h1>
      {/* UI updation is controlled by React */}
      <h2>Counter Value:{counter}</h2>
      <button
      onClick={addvalue}
      >Add Value {counter}</button>
      <br/> <br />
      <button
      onClick={removevalue}
      >Remove Value {counter}</button>
      <p>footer:{counter}</p>
    </>
  )
}

export default App

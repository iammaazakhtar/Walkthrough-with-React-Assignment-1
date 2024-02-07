import { useState } from 'react'
import './App.css'
import Person from './Person'
import Button from './Button';
import Header from './Header';
import List from './List';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header title={"Learn React basic"}/>
      <Person name="John" age="25"/>
      <Button text={"show message"} onClick={() => {
        alert("Button clicked")
      }}/>
      <List items={["react", "html", "css", "javascript"]}/>
    </>
  )
}

export default App

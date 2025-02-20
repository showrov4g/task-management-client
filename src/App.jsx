import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyContext from './Context/MyContext'
import AddTask from './components/AddTask/AddTask'

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
      <div>
        <AddTask></AddTask>
      </div>
    </>
  )
}

export default App

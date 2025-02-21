import { useContext, useState } from 'react'

import './App.css'
import TodoForm from './Components/TodoForm/TodoForm'
import Login from './Components/LoginButton/Login'

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
      <div>
        <Login></Login>
        <TodoForm></TodoForm>
      </div>
    </>
  )
}

export default App

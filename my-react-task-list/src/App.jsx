import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Task from './components/Task'
import TaskList from './components/TaskList'


function App() {
  const [count, setCount] = useState(0)
  const taskList = [
    {
      id: 1,
      task: "Hacer la tarea"
    },
    {
      id: 2,
      task: "Hacer las compras"
    },
    {
      id: 3,
      task: "Limpiar la casa"
 }
  ]
  return (
    <div class = "divWrapper">
      <Header></Header>
      <TaskList className = "taskModi" task={taskList}></TaskList>
    </div>
  )
}

export default App

//this import only needed if making class
import React from 'react'
//component imports
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
//React imports
import { useState } from 'react'

//Use build folder for release, other files are for development. "serve -s build -p 8000" will start a server for the final product; localhost:3000 is the development server.

function App() {
  //whether the add task form is showing or not. If use state is true, then the form will start out showing up.
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30 pm',
        reminder: true
    },
    {
        id: 2,
        text: 'Meeting at School',
        day: 'Feb 6th at 1:30 pm',
        reminder: false
    }
  ])
  
//Add task
const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) * 1
  const newTask = {id, ...task}
  //sets the tasks array to the previous array with "new task" added on
  setTasks([...tasks, newTask])
}

  //delete task function
  const deleteTask = (id) => {
    //set tasks to only the tasks that are not equal to the id that is being deleted
    setTasks(tasks.filter((task) => task.id !== id));
  }

  //toggle reminder
  const toggleReminder = (id) => {
    //If the id of the task double-clicked equals the id of the current task in the loop, set the reminder to the opposite of what it currently is
    setTasks(
      tasks.map((task) => 
        task.id === id ? { ...task, reminder: 
        !task.reminder } : task
      )
    )
  }

  //A bit different from HTML: class is className, etc.
  //Use blank open/close tags to not have div surrounding elements

  //pass deleteTask as the onDelete prop
  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />) : ('No Tasks to Show')}
    </div>
  )
}

/*
  class App extends React.Component {
    render() {
      return <h1>Hello from a class</h1>
    }
  }
*/


export default App;

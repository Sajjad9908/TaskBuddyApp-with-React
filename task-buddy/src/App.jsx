import React, { use, useEffect, useState } from 'react'
import { Progresstracker } from './components/Progresstracker'
import TaskForm  from './components/TaskForm'
import { TaskList } from './components/TaskList'
import './app.css'; // Importing the main CSS file for styling

const App = () => {

  useEffect(()=>{
    localStorage.setItem('tasks', JSON.stringify(tasks));
  })
  
const [tasks,setTasks]=useState([])

  const addTask = (task) => {
    setTasks([...tasks, task]);
    console.log('Task added:', task);
  };
  const updateTask = (updatedtask,index) => {
    const newtask=[...tasks];
    newtask[index]=updatedtask;
    setTasks(newtask);
    console.log('Task updated:', updatedtask);
  }
  const deleteTask = (index) => { 
    const deletedtask=tasks.filter((_, i) => i !== index);
    setTasks(deletedtask);
   
  }
  return (
    <>

      <div className="container">
        <header>
          <h1>
          Task <span id="span"> Buddy</span> 
          </h1>
          <p className='keepTrack'>Keep track of your tasks and stay productive!</p>
          <p className='keepTrack'>Built with React</p>
          <p className='keepTrack'>By: Your Sajjad Hussain Memon</p>
        </header>
      </div>
        
        <TaskForm addTask={addTask}/>
        <TaskList  updateTask={updateTask} deleteTask={deleteTask} tasks={tasks}/>
      
         {/* <Progresstracker /> */}
    </>
  )
}

export default App
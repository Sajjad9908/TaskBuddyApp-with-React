import React from 'react'
import './taskform.css'; // here it is css  for styling

const TaskForm = ({addTask}) => {
    const [task, setTask] = React.useState('');
    const [priority, setPriority] = React.useState('Medium');
    const [category, setCategory] = React.useState('General');
 
    const handleSubmit=(e)=>{
        e.preventDefault();
        addTask({Text: task, Priority: priority, Category: category,status:false});

        setTask('');
        setPriority('Medium');
        setCategory('General');
    }


  return (
   <form className='task-form' onSubmit={handleSubmit}>
    <div className='MiainTaskDiv'>
    <div id="inp">
        <input type='text' value={task} placeholder='Enter Your Task' onChange={(e)=>setTask(e.target.value)}/><div className='btndiv'><button id='addbtn' type='submit'>Add Task</button></div>
    </div>
    <div id="btns">
        <select onChange={(e)=>setPriority(e.target.value)} value={priority}>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
        </select>
        <select onChange={(e)=>setCategory(e.target.value)} value={category}>
            <option value="General">General</option>
            <option value="Work">Work</option>
            <option value="Personal">Personal</option>
        </select>
    </div>
    </div>
   
   </form>
  )
}

export default TaskForm
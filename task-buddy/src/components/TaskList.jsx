import React from 'react'
import './tasklist.css'; // Importing the CSS file for styling

export const TaskList = ({updateTask,deleteTask,tasks}) => {
    const Togglebutton=(index)=>{
        const updatedTasks={...tasks[index],status: !tasks[index].status}
        updateTask(updatedTasks,index)
    }
  return (
    <>
    <div className='task-list'>
      <h2>Task List</h2>
      </div>
      
    <ul>
     {
        tasks.map((task,index)=>(
          
            <li key={index}>
              <div className='task-item-container'>
                <div className='task-item'>
                    <span  className={task.status?'completed':''}>{task.Text} ({task.Priority} {task.Category})</span>
                   
                </div>
                <div className='task-buttons'>
                   
                    <button className='tasklistButtons' onClick={()=>Togglebutton(index)}>{task.status?"completed":"Undo"}</button>
                    <button className='tasklistButtons' onClick={()=>deleteTask(index)}>Delete</button>
                    </div>
                    </div>
               
    </li>
 
        ))

      
     }
    </ul>


    </>
  )
}

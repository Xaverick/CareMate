import React from 'react'
import Progressbar from "./ProgressBar";

const doctor = () => {
  return (
    
    <div className="tasks">
        <h2>Completed Task</h2>
        <div className="task">
        <div className="task-name">
            <h3>Task 1</h3>
            <Progressbar />
        </div>
        </div>
        <div className="task">
        <div className="task-name">
            <h3>Task 1</h3>
            <Progressbar />
        </div>
        </div>
        <div className="task">
        <div className="task-name">
            <h3>Task 1</h3>
            <Progressbar />
        </div>
        </div>
    </div>
    
  )
}

export default doctor
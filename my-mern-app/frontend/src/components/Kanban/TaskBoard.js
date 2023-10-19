import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TaskBoard() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    // Implement loading tasks from the backend
  }, []);

  const handleCreateTask = () => {
    // Implement creating a new task
  };

  const handleUpdateTask = (taskId, updatedData) => {
    // Implement updating a task
  };

  const handleDeleteTask = (taskId) => {
    // Implement deleting a task
  };

  return (
    <div>
      <h2>Kanban Board</h2>
      <div>
        {tasks.map((task) => (
          <div key={task._id}>
            <div>{task.title}</div>
            <button onClick={() => handleUpdateTask(task._id, { done: !task.done })}>
              Toggle Done
            </button>
            <button onClick={() => handleDeleteTask(task._id)}>Delete</button>
          </div>
        ))}
      </div>
      <input
        type="text"
        placeholder="New task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={handleCreateTask}>Add Task</button>
    </div>
  );
}

export default TaskBoard;

import React from 'react';

function TaskList({ tasks, onChangeTask, onDeleteTask }) {
  return (
    <ul className="list-group  ">
      {tasks.map(task => (
        <li key={task.id} className="list-group-item  ">
          <div className="form-check ">
            <input
              className="form-check-input"
              type="checkbox"
              checked={task.done}
              onChange={() => onChangeTask({ ...task, done: !task.done })}
            />
            <label
              className="form-check-label"
              style={{ textDecoration: task.done ? 'line-through' : 'none' }}
            >
              {task.text}
            </label>
            <div className='d-flex justify-content-end align-items-center'>
            <button
              className="btn btn-danger ml-auto "
              onClick={() => onDeleteTask(task.id)}
            >
              Delete
            </button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;

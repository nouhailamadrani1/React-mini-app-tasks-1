import React, { useState } from 'react';

function AddTask({ onAddTask }) {
  const [text, setText] = useState('');

  const handleChange = e => {
    setText(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (text.trim()) {
      onAddTask(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className=''>
      <div className="input-group mb-3 ">
        <input
          type="text"
          className="form-control"
          placeholder="Enter task"
          value={text}
          onChange={handleChange}
        />
        <div className="input-group-append mx-2">
          <button className="btn btn-primary" type="submit">
            Add Task
          </button>
        </div>
      </div>
    </form>
  );
}

export default AddTask;

import { useReducer } from 'react';
import AddTask from './AddTask.js';
import TaskList from './TaskList.js';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function TaskApp() {
  const [tasks, dispatch] = useReducer(
    tasksReducer,
    initialTasks
  );

  function handleAddTask(text) {
    dispatch({
      type: 'added',
      id: nextId++,
      text: text,
    });
  }

  function handleChangeTask(task) {
    dispatch({
      type: 'changed',
      task: task
    });
  }

  function handleDeleteTask(taskId) {
    dispatch({
      type: 'deleted',
      id: taskId
    });
  }

 return (
<div className='d-flex justify-content-center align-items-center mt-5 '>
<div className='text-start w-75'>
    <h4 className='text-center my-3'>Tasks :</h4>
    <AddTask onAddTask={handleAddTask} />
    <TaskList
      tasks={tasks}
      onChangeTask={handleChangeTask}
      onDeleteTask={handleDeleteTask}
    />
  </div>
</div>
);

}

function tasksReducer(tasks, action) {
  switch (action.type) {
    case 'added': {
      return [...tasks, {
        id: action.id,
        text: action.text,
        done: false
      }];
    }
    case 'changed': {
      return tasks.map(t => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case 'deleted': {
      return tasks.filter(t => t.id !== action.id);
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

let nextId = 4;
const initialTasks = [
  { id: 0, text: 'Set Up Your Development Environment:', done: true },
  { id: 1, text: 'Understand the Basics', done: true },
  { id: 2, text: 'Build Your First React App', done: false },
  { id: 3, text: 'State Management', done: false }
];

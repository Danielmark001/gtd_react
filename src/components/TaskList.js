import React from "react";
import Task from "./Task";

const TaskList = ({ tasks, updateTask, deleteTask }) => {
  return (
    <div>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          updateTask={updateTask}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
};

export default TaskList;

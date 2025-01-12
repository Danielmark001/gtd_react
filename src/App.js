import React, { useState } from "react";
import TaskForm from "./components/taskform";
import TaskList from "./components/TaskList";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filterStatus, setFilterStatus] =  useState("All Statuses");
  const [filterPriority, setFilterPriority] =  useState("All Priorities");

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const updateTask = (id, updatedTask) => {
    setTasks(tasks.map((task) => (task.id === id ? updatedTask : task)));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const filteredTasks = tasks.filter( (task) => {
    const matchesStatus =
      filterStatus === "All Statuses" || task.status === filterStatus;
    const matchesPriority =
      filterPriority === "All Priorities" || task.priority === filterPriority;
    return matchesStatus && matchesPriority;
  });

  return (
    <div className="container">
      <h1>Task Management App</h1>
      <TaskForm addTask={addTask} />
      <div className="filters">
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
        >
          <option>All Statuses</option>
          <option>To Do</option>
          <option>In Progress</option>
          <option>Completed</option>
        </select>
        <select
          value={filterPriority}
          onChange={(e) => setFilterPriority(e.target.value)}
        >
          <option>All Priorities</option>
          <option>Low Priority</option>
          <option>Medium Priority</option>
          <option>High Priority</option>
        </select>
      </div>
      <TaskList
        tasks={filteredTasks}
        updateTask={updateTask}
        deleteTask={deleteTask}
      />
    </div>
  );
};

export default App;

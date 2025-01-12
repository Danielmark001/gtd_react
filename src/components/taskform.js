import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const TaskForm = ({ addTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Medium Priority");
  const [status, setStatus] = useState("To Do");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask({ id: uuidv4(), title, description, priority, status });
    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Task Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option>Low Priority</option>
        <option>Medium Priority</option>
        <option>High Priority</option>
      </select>
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option>To Do</option>
        <option>In Progress</option>
        <option>Completed</option>
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;

import React, { useState } from "react";

const Task = ({ task, updateTask, deleteTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task);

  const handleEdit = () => {
    updateTask(task.id, editedTask);
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedTask.title}
            onChange={(e) =>
              setEditedTask({ ...editedTask, title: e.target.value })
            }
          />
          <textarea
            value={editedTask.description}
            onChange={(e) =>
              setEditedTask({ ...editedTask, description: e.target.value })
            }
          />
          <select
            value={editedTask.priority}
            onChange={(e) =>
              setEditedTask({ ...editedTask, priority: e.target.value })
            }
          >
            <option>Low Priority</option>
            <option>Medium Priority</option>
            <option>High Priority</option>
          </select>
          <select
            value={editedTask.status}
            onChange={(e) =>
              setEditedTask({ ...editedTask, status: e.target.value })
            }
          >
            <option>To Do</option>
            <option>In Progress</option>
            <option>Completed</option>
          </select>
          <button onClick={handleEdit}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </>
      ) : (
        <>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <p>{task.priority}</p>
          <p>{task.status}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </>
      )}
    </div>
  );
};

export default Task;

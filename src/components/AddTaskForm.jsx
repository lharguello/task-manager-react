import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function AddTaskForm() {
  const { handleAddTask } = useContext(TaskContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    handleAddTask({ id: Date.now(), title, description, status: "Pending" });
    setTitle("");
    setDescription("");
  };

  return (
<form onSubmit={handleSubmit}>
      <br/>
      <label>Título:</label>
      <input 
        type="text" 
        placeholder="Título" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        required 
      />
<br/>
      <label>Descripción:</label>
      <br/>
      <textarea 
        placeholder="Describe la tarea aquí..." 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
        rows="4"
        cols="50"
      />
      <br/>
      <button type="submit">Agregar Tarea</button>
    </form>
  );
}

export default AddTaskForm;
